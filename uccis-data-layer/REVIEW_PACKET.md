# 🧠 UCCIS – Zone Intelligence & Prediction Sprint

## Data Intelligence Layer (Madhumati)

---

## 👤 Project Overview

This project upgrades a zone monitoring system from a simple data display tool into an **intelligent prediction system**.

It evolves from:

- Static values ❌
- To time-based analysis + prediction + reasoning ✔️

---

# 📊 PHASE 1 — Data Over Time (Time Series Capture)

## Goal:

Convert single values into historical sequences.

### Example:

traffic_history: [60, 68, 75, 82]
violation_history: [2, 4, 6, 8]

## Why:

- Enables trend detection
- Forms base for prediction
- Converts system into time-aware model

---

# 📈 PHASE 2 — Trend + Feature Extraction

## 1. Trend Detection

if (last > previous) → "increasing"
else → "decreasing"

### Output:

- traffic_trend → increasing
- violation_trend → increasing

---

## 2. Moving Average

moving_average = (a + b + c) / 3

### Example:

[75, 82, 88] → 81.66

---

## 3. Risk Score (0–100)

Logic:

- traffic > 70 → +30
- violations > 10 → +30
- increasing trend → +20

Example:
Risk Score = 80

---

# 🔮 PHASE 3 — Prediction Layer

## Goal:

Predict next value using simple logic.

next_value = average(last 3 values) + small increment

Example:
[75, 82, 88]
→ Avg = 81.66
→ Next ≈ 85–90

---

## Classification:

- 0–40 → LOW
- 41–70 → MEDIUM
- 71–100 → HIGH

---

# 🧠 PHASE 4 — Reasoning Layer

## Goal:

Explain predictions in human language.

Zone 4 Prediction:
HIGH RISK (Next Cycle)

Reason:

- Traffic increasing
- Violations rising
- High moving average
- Risk score above threshold

---

# 🖥️ PHASE 5 — UI Integration

Each zone displays:

- Risk Score
- Prediction
- Reason

Zone 4
Risk Score: 78
Prediction: HIGH
Reason:

- Traffic increasing
- Violations rising
- High moving average

---

# 🔁 SYSTEM FLOW

Raw Data
→ Time Series Storage
→ Trend Detection
→ Feature Extraction
→ Risk Scoring
→ Prediction Layer
→ Reasoning Layer
→ UI Display

---

# 🎯 FINAL OUTCOME

Static dashboard → Intelligent prediction system

---
