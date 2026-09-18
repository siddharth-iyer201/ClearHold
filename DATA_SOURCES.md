# Data sources and screening method

ClearHold deliberately separates **fund holdings**, **financial comparison metrics**, and **values screens**. The demo uses committed snapshots so results do not drift between test runs.

## Fund holdings

| Fund | Snapshot | Official source |
|---|---:|---|
| IVV | September 16, 2026 | [iShares Core S&P 500 ETF](https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf) and its `latest-holdings.csv` download |
| SUSA | September 16, 2026 | [iShares ESG Optimized MSCI USA ETF](https://www.ishares.com/us/products/239692/ishares-msci-usa-esg-select-etf) and its `latest-holdings.csv` download |
| ESGU | September 16, 2026 | [iShares ESG Aware MSCI USA ETF](https://www.ishares.com/us/products/286007/ishares-esg-aware-msci-usa-etf) and its `latest-holdings.csv` download |

The API parses equity rows and reports the parsed share of fund weight. Cash and non-equity rows are excluded.

## Financial comparison

Expense ratios, annualized three-year total returns, and annualized three-year standard deviations are transcribed from the official iShares fund pages, accessed September 17, 2026. They are descriptive, backward-looking metrics, not forecasts. The comparison does not account for taxes, spreads, tracking error, or a user's circumstances.

## Values screens

- **Fossil fuels:** issuer sector and business classification, contextualized by the [EPA Greenhouse Gas Reporting Program](https://www.epa.gov/ghgreporting). ClearHold currently flags a small explicit list of integrated oil, exploration, and oilfield-service issuers.
- **Weapons:** company matches from the [SIPRI Arms Industry Database](https://www.sipri.org/databases/armsindustry).
- **Tobacco:** explicit tobacco manufacturers, with sector context from the [WHO tobacco fact sheet](https://www.who.int/en/news-room/fact-sheets/detail/tobacco/).
- **Deforestation:** selected companies assessed for forest-risk commodity exposure by [Forest 500](https://forest500.org/forest-500-data-methods/). A match denotes exposure to the screen, not proven illegal deforestation.
- **Private prisons:** supported by the schema, but the current three fund fixtures have no verified direct operator match.

Rules are intentionally explicit in `server/data/controversies.json`. A company is unflagged when it has no match in this curated demo set. That means **unflagged is not the same as controversy-free**. Category weights can overlap if a company matches more than one screen.

## Reproducibility and updates

The source CSVs are committed under `server/data/holdings/`. Refresh them manually from the official download links, review changes, update each fund's `asOf` date, and rerun the full suite. ClearHold never presents the fixtures as live data.
