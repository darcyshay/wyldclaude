import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MetabolicPulse() {
  const [monthlySpend, setMonthlySpend] = useState(22000);

  const annualHumanCost = monthlySpend * 12;
  const mmeAnnualCost = 102000;
  const savings = annualHumanCost - mmeAnnualCost;
  const efficiencyMultiplier = (annualHumanCost / mmeAnnualCost).toFixed(1);
  const savingsPercentage = Math.round((savings / annualHumanCost) * 100);

  let statusZone = 'Pre-ignition';
  let statusColor = 'var(--rust)';

  if (savingsPercentage >= 60) {
    statusZone = 'Compounding zone';
    statusColor = 'var(--green)';
  } else if (savingsPercentage >= 30) {
    statusZone = 'Break-even';
    statusColor = 'var(--sand)';
  }

  const fillPercentage = Math.min((savingsPercentage / 100) * 100, 100);

  return (
    <section
      style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {/* Kicker */}
      <p
        style={{
          fontSize: '0.875rem',
          fontFamily: 'var(--sans)',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
          marginBottom: '0.5rem',
          opacity: 0.6,
        }}
      >
        Metabolic Pulse
      </p>

      {/* Title */}
      <h2
        style={{
          fontSize: '2.5rem',
          fontFamily: 'var(--serif)',
          fontWeight: 700,
          color: 'var(--ink)',
          marginBottom: '3rem',
          lineHeight: 1.1,
        }}
      >
        See the math.
      </h2>

      {/* Main Content Card */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          backgroundColor: 'var(--chalk)',
          border: '1px solid #e5e5e5',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        {/* Left: Slider & Numbers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Slider */}
          <div>
            <label
              style={{
                display: 'block',
                fontFamily: 'var(--mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                opacity: 0.5,
                marginBottom: '1rem',
              }}
            >
              Monthly Agency/Labor Spend
            </label>
            <input
              type="range"
              min="5000"
              max="60000"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                background: 'linear-gradient(to right, var(--rust), var(--sand), var(--green))',
                outline: 'none',
                WebkitAppearance: 'none',
                appearance: 'none',
                cursor: 'pointer',
              }}
            />
            <style>{`
              input[type="range"]::-webkit-slider-thumb {
                WebkitAppearance: none;
                appearance: none;
                width: 20px;
                height: 20px;
                borderRadius: 50%;
                background: var(--ink);
                cursor: pointer;
                boxShadow: 0 2px 8px rgba(0,0,0,0.15);
              }
              input[type="range"]::-moz-range-thumb {
                width: 20px;
                height: 20px;
                borderRadius: 50%;
                background: var(--ink);
                cursor: pointer;
                border: none;
                boxShadow: 0 2px 8px rgba(0,0,0,0.15);
              }
            `}</style>
          </div>

          {/* Numbers Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {/* Annual Human Cost */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  opacity: 0.5,
                  marginBottom: '0.5rem',
                }}
              >
                Annual Cost
              </p>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.875rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  lineHeight: 1,
                }}
              >
                ${(annualHumanCost / 1000).toFixed(0)}k
              </p>
            </div>

            {/* Efficiency Multiplier */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  opacity: 0.5,
                  marginBottom: '0.5rem',
                }}
              >
                Efficiency
              </p>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.875rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  lineHeight: 1,
                }}
              >
                {efficiencyMultiplier}x
              </p>
            </div>

            {/* Annual Savings */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  opacity: 0.5,
                  marginBottom: '0.5rem',
                }}
              >
                Annual Savings
              </p>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.875rem',
                  fontWeight: 700,
                  color: statusColor,
                  lineHeight: 1,
                }}
              >
                ${(savings / 1000).toFixed(0)}k
              </p>
            </div>

            {/* Savings Percentage */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  opacity: 0.5,
                  marginBottom: '0.5rem',
                }}
              >
                Distance to Dollar
              </p>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.875rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  lineHeight: 1,
                }}
              >
                {savingsPercentage}%
              </p>
            </div>
          </div>
        </div>

        {/* Right: Animated Meter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Status Zone Label */}
          <div>
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                opacity: 0.5,
                marginBottom: '0.75rem',
              }}
            >
              Status Zone
            </p>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: statusColor,
                lineHeight: 1,
              }}
            >
              {statusZone}
            </p>
          </div>

          {/* Fill Bar with Zones */}
          <div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '120px',
                backgroundColor: '#f5f5f5',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                border: '1px solid #e5e5e5',
              }}
            >
              {/* Pre-ignition Zone (0-30%) */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '30%',
                  height: '100%',
                  backgroundColor: 'var(--rust)',
                  opacity: 0.1,
                  zIndex: 1,
                }}
              />

              {/* Break-even Zone (30-60%) */}
              <div
                style={{
                  position: 'absolute',
                  left: '30%',
                  top: 0,
                  width: '30%',
                  height: '100%',
                  backgroundColor: 'var(--sand)',
                  opacity: 0.1,
                  zIndex: 1,
                }}
              />

              {/* Compounding Zone (60-100%) */}
              <div
                style={{
                  position: 'absolute',
                  left: '60%',
                  top: 0,
                  width: '40%',
                  height: '100%',
                  backgroundColor: 'var(--green)',
                  opacity: 0.1,
                  zIndex: 1,
                }}
              />

              {/* Animated Fill Bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${fillPercentage}%` }}
                transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                style={{
                  height: '100%',
                  background: `linear-gradient(to right, var(--rust), var(--sand), var(--green))`,
                  position: 'relative',
                  zIndex: 2,
                }}
              />

              {/* Zone Labels */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  fontFamily: 'var(--mono)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  opacity: 0.3,
                  pointerEvents: 'none',
                  zIndex: 3,
                }}
              >
                <span>Pre-ignition</span>
                <span>Break-even</span>
                <span>Compounding</span>
              </div>
            </div>
          </div>

          {/* MME Cost Reference */}
          <div
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #e5e5e5',
              borderRadius: '0.5rem',
              padding: '1rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                opacity: 0.5,
                marginBottom: '0.5rem',
              }}
            >
              MME Annual Cost
            </p>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--ink)',
                lineHeight: 1,
              }}
            >
              ${(mmeAnnualCost / 1000).toFixed(0)}k
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
