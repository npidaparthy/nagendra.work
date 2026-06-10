#!/usr/bin/env python3
"""
nagendra.work — Portfolio Validation Utilities
===============================================
Run from the project root:

    python3 utils/validate.py            # run all checks
    python3 utils/validate.py sources    # run one check by name

Available checks (pass as argument):
    all         Run everything (default)
    summary     High-level counts at a glance
    sources     All quote source references
    quotes      Quote completeness (missing Telugu meanings etc.)
    experience  Job entries — dates, tags, bullet counts
    skills      Skill categories and tag counts
    awards      Award groups and item counts
    assets      Check photo + PDF exist on disk
    flags       Key boolean flags (available, current jobs)
    hcjp        Scan for any banned/removed strings
    socials     Personal URLs (github, youtube, linkedin)

Print commands — dump actual content by script:
    quotes devanagari    Print all 25 shlokas in Devanagari
    quotes telugu        Print all 25 shlokas in Telugu script
    quotes iast          Print all 25 shlokas in IAST romanisation
    quotes meaning_en    Print all 25 English meanings
    quotes meaning_te    Print all 25 Telugu meanings
    quotes meaning_sa    Print all 25 Sanskrit meanings
    quotes all           Print all fields for every quote (full dump)
"""

import re, os, sys

# ── Load the raw JS file ─────────────────────────────────────────────────────

ROOT   = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CV_JS  = os.path.join(ROOT, 'js', 'cv-data.js')
IDX    = os.path.join(ROOT, 'index.html')
CSS    = os.path.join(ROOT, 'css', 'style.css')

def load(path):
    with open(path, encoding='utf-8') as f:
        return f.read()

cv  = load(CV_JS)
idx = load(IDX)

# ── Helpers ──────────────────────────────────────────────────────────────────

def section(title):
    print(f'\n{"─" * 60}')
    print(f'  {title}')
    print(f'{"─" * 60}')

def ok(msg):   print(f'  ✅  {msg}')
def warn(msg): print(f'  ⚠️   {msg}')
def fail(msg): print(f'  ❌  {msg}')
def info(msg): print(f'  ℹ️   {msg}')

# ── Individual checks ────────────────────────────────────────────────────────

def check_summary():
    """High-level counts — quick sanity check."""
    section('SUMMARY — content counts')
    counts = {
        'Experience jobs':       len(re.findall(r'company:\s*["\']', cv)),
        'Skill categories':      len(re.findall(r'icon:\s*["\'].*?["\'],', cv)),
        'Award groups':          len(re.findall(r'org:\s*["\']', cv)),
        'Projects':              len(re.findall(r'title:\s*["\']', cv)) - 1,  # minus personal.title
        'Gallery items':         len(re.findall(r'image:\s*["\']', cv)),
        'Sanskrit certifications': len(re.findall(r'name:\s*["\'].*?["\'],\s*\n\s*institution:', cv)),
        'Texts studied':         len(re.findall(r'en:\s*["\']', cv)),
        'Quotes (subhāṣitāni)':  len(re.findall(r'devanagari:', cv)),
        'Sanskrit meanings':     len(re.findall(r'meaning_sa:', cv)),
        'Source references':     len(re.findall(r'source:\s*["\']', cv)),
    }
    for label, count in counts.items():
        info(f'{label:<30} {count}')


def check_sources():
    """Print all quote source references."""
    section('QUOTE SOURCES — all 25')
    sources = re.findall(r"source:\s*['\"](.+?)['\"]", cv)
    if not sources:
        fail('No sources found — check cv-data.js structure')
        return
    for i, s in enumerate(sources, 1):
        print(f'  {i:2}. {s}')
    info(f'\n  Total: {len(sources)} sources')


def _parse_quotes():
    """Parse all quote blocks into a list of dicts."""
    blocks = re.findall(r'\{[^{}]*?devanagari:.*?source:.*?\}', cv, re.DOTALL)
    quotes = []
    for block in blocks:
        def get(field):
            # handles both single and multi-line backtick/quote strings
            m = re.search(rf"{field}:\s*['\"`](.*?)['\"`],", block, re.DOTALL)
            return m.group(1).strip() if m else ''
        quotes.append({
            'devanagari': get('devanagari'),
            'telugu':     get('telugu'),
            'iast':       get('iast'),
            'meaning_en': get('meaning_en'),
            'meaning_te': get('meaning_te'),
            'meaning_sa': get('meaning_sa'),
            'source':     get('source'),
        })
    return quotes


def check_quotes(print_field=None):
    """Check completeness, or print all quotes in a given script/field."""

    quotes = _parse_quotes()

    # ── Print mode ────────────────────────────────────────────────
    PRINT_FIELDS = ('devanagari', 'telugu', 'iast', 'meaning_en', 'meaning_te', 'meaning_sa', 'all')
    if print_field:
        if print_field not in PRINT_FIELDS:
            fail(f'Unknown field "{print_field}". Choose from: {", ".join(PRINT_FIELDS)}')
            return
        label_map = {
            'devanagari': 'Devanagari',
            'telugu':     'Telugu script',
            'iast':       'IAST romanisation',
            'meaning_en': 'English meaning',
            'meaning_te': 'Telugu meaning',
            'meaning_sa': 'Sanskrit meaning',
            'all':        'Full dump',
        }
        section(f'QUOTES — {label_map[print_field]}  ({len(quotes)} total)')
        for i, q in enumerate(quotes, 1):
            print(f'\n  ── {i:2}. [{q["source"]}]')
            if print_field == 'all':
                for f in PRINT_FIELDS[:-1]:
                    val = q[f].replace('\n', ' / ')
                    print(f'     {f:<12}: {val}')
            else:
                # unescape JS \n sequences for clean terminal display
                text = q[print_field].replace('\\n', '\n     ')
                print(f'     {text}')
        return

    # ── Validation mode (default) ─────────────────────────────────
    section('QUOTES — completeness check')
    if not quotes:
        fail('Could not parse quote blocks')
        return
    missing_te = []
    missing_sa = []
    for i, q in enumerate(quotes, 1):
        issues = [f for f in ('devanagari','telugu','iast','meaning_en') if not q[f]]
        if issues:
            fail(f'Quote {i:2}: missing {", ".join(issues)}')
        if not q['meaning_te']: missing_te.append(i)
        if not q['meaning_sa']: missing_sa.append(i)
    ok(f'All {len(quotes)} quotes have devanagari / telugu / iast / meaning_en')
    if missing_te:
        warn(f'Quotes without meaning_te (Telugu meaning): {missing_te}')
    else:
        ok('All quotes have meaning_te')
    if missing_sa:
        warn(f'Quotes without meaning_sa (Sanskrit meaning): {missing_sa}')
    else:
        ok('All quotes have meaning_sa')


def check_experience():
    """Check each job has required fields and reasonable bullet count."""
    section('EXPERIENCE — job entries')
    companies = re.findall(r"company:\s*['\"](.+?)['\"]", cv)
    bullet_blocks = re.findall(r'bullets:\s*\[(.*?)\]', cv, re.DOTALL)
    tag_blocks    = re.findall(r'tags:\s*\[(.*?)\]',    cv, re.DOTALL)

    for i, company in enumerate(companies):
        bullets = len(re.findall(r'"[^"]+?"', bullet_blocks[i])) if i < len(bullet_blocks) else 0
        tags    = len(re.findall(r'"[^"]+?"', tag_blocks[i]))    if i < len(tag_blocks)    else 0
        status  = '✅' if 2 <= bullets <= 6 else '⚠️ '
        print(f'  {status}  {company:<30} {bullets} bullets  {tags} tags')

    ok(f'{len(companies)} jobs total')


def check_skills():
    """List skill categories and tag counts."""
    section('SKILLS — categories and tag counts')
    # Each skill block: { icon: "...", name: "...", tags: [...] }
    skill_blocks = re.findall(
        r'\{\s*icon:\s*["\'][^"\']+["\']\s*,\s*\n\s*name:\s*["\'][^"\']+["\']\s*,\s*\n\s*tags:\s*\[([^\]]+)\]',
        cv, re.DOTALL
    )
    categories = re.findall(
        r'icon:\s*["\'](.+?)["\']\s*,\s*\n\s*name:\s*["\'](.+?)["\']', cv
    )
    for i, (icon, name) in enumerate(categories):
        tags = len(re.findall(r'"[^"]+?"', skill_blocks[i])) if i < len(skill_blocks) else '?'
        print(f'  ℹ️   {icon} {name:<35} {tags} tags')


def check_awards():
    """List award groups and item counts."""
    section('AWARDS — groups and item counts')
    orgs  = re.findall(r"org:\s*['\"](.+?)['\"]", cv)
    items = re.findall(r'items:\s*\[(.*?)\]', cv, re.DOTALL)
    for i, org in enumerate(orgs):
        count = len(re.findall(r'"[^"]+?"', items[i])) if i < len(items) else 0
        print(f'  ℹ️   {org:<35} {count} items')
    ok(f'{len(orgs)} award groups total')


def check_assets():
    """Verify photo and CV PDF exist on disk."""
    section('ASSETS — files on disk')
    photo = re.search(r"photo:\s*['\"](.+?)['\"]", cv)
    pdf   = re.search(r"cvPdf:\s*['\"](.+?)['\"]", cv)

    for label, match in [('Profile photo', photo), ('CV PDF', pdf)]:
        if not match:
            fail(f'{label}: path not found in cv-data.js')
            continue
        path = os.path.join(ROOT, match.group(1))
        if os.path.exists(path):
            size = os.path.getsize(path)
            ok(f'{label}: {match.group(1)}  ({size:,} bytes)')
        else:
            fail(f'{label}: FILE MISSING — {match.group(1)}')

    # Gallery placeholder check
    placeholders = re.findall(r'placeholder\d+\.jpg', cv)
    if placeholders:
        warn(f'Gallery still has {len(placeholders)} placeholder image(s) — replace when ready')
    else:
        ok('No placeholder gallery images')


def check_flags():
    """Check key boolean flags."""
    section('FLAGS — key settings')
    available = re.search(r'available:\s*(true|false)', cv)
    if available:
        val = available.group(1)
        if val == 'false':
            ok(f'available: false  (badge hidden — correct for normal mode)')
        else:
            warn(f'available: true  (green "Available for Senior Roles" badge is SHOWING)')

    current_jobs = re.findall(r'current:\s*true', cv)
    companies    = re.findall(r'company:\s*["\'](.+?)["\']', cv)
    current_idx  = [i for i, _ in enumerate(
        re.findall(r'current:\s*(true|false)', cv)) if re.findall(r'current:\s*(true|false)', cv)[i] == 'true']
    info(f'Jobs marked current: true — {len(current_jobs)} '
         f'({companies[current_idx[0]] if current_idx and current_idx[0] < len(companies) else "?"})')


def check_hcjp():
    """Scan for removed/banned strings that should no longer appear."""
    section('BANNED STRINGS — should not exist anywhere')
    banned = ['HCJP', 'hcjp', 'Bots & Automation', 'nagendra.work" in footer']
    files  = {'cv-data.js': cv, 'index.html': idx}
    found_any = False
    for term in banned:
        for fname, content in files.items():
            if term.lower() in content.lower():
                fail(f'"{term}" found in {fname}')
                found_any = True
    if not found_any:
        ok('No banned strings found in cv-data.js or index.html')


def check_socials():
    """Verify personal URLs are present and look valid."""
    section('SOCIALS — personal URLs')
    fields = {
        'linkedin': r"linkedin:\s*['\"](.+?)['\"]",
        'github':   r"github:\s*['\"](.+?)['\"]",
        'youtube':  r"youtube:\s*['\"](.+?)['\"]",
        'email':    r"email:\s*['\"](.+?)['\"]",
        'phone':    r"phone:\s*['\"](.+?)['\"]",
    }
    for label, pattern in fields.items():
        match = re.search(pattern, cv)
        if match:
            ok(f'{label:<10} {match.group(1)}')
        else:
            fail(f'{label:<10} NOT FOUND in cv-data.js')


# ── Runner ───────────────────────────────────────────────────────────────────

CHECKS = {
    'summary':    check_summary,
    'sources':    check_sources,
    'quotes':     check_quotes,
    'experience': check_experience,
    'skills':     check_skills,
    'awards':     check_awards,
    'assets':     check_assets,
    'flags':      check_flags,
    'hcjp':       check_hcjp,
    'socials':    check_socials,
}

def run_all():
    for fn in CHECKS.values():
        fn()
    print(f'\n{"═" * 60}')
    print('  Done.')
    print(f'{"═" * 60}\n')

if __name__ == '__main__':
    arg  = sys.argv[1].lower() if len(sys.argv) > 1 else 'all'
    arg2 = sys.argv[2].lower() if len(sys.argv) > 2 else None

    if arg == 'all':
        run_all()
    elif arg == 'quotes':
        # optional second arg: devanagari | telugu | iast | meaning_en | meaning_te | all
        check_quotes(print_field=arg2)
        print()
    elif arg in CHECKS:
        CHECKS[arg]()
        print()
    else:
        print(f'Unknown check: "{arg}"')
        print(f'Available: all, {", ".join(CHECKS.keys())}')
        print(f'  quotes devanagari | telugu | iast | meaning_en | meaning_te | meaning_sa | all')
        sys.exit(1)
