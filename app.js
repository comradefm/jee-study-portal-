/* =====================================================
   JEE 2027 — 99 Percentile Mission Control
   app.js — Full syllabus data + progress tracking
===================================================== */

// ============ SYLLABUS DATA ============

const PHYSICS = [
  {
    id: "ph01",
    name: "Units, Dimensions & Measurements",
    phase: 1,
    weightage: "medium",
    prereq: "None — start here",
    subtopics: [
      "SI units and fundamental quantities",
      "Dimensional analysis",
      "Significant figures & error analysis",
      "Vernier caliper & screw gauge"
    ],
    resources: ["HC Verma Ch.1", "NCERT 11 Ch.2", "JEE PYQs"]
  },
  {
    id: "ph02",
    name: "Kinematics (1D & 2D)",
    phase: 1,
    weightage: "high",
    prereq: "Basic Algebra, Trigonometry",
    subtopics: [
      "Motion in a straight line — v, a, equations",
      "Relative motion",
      "Projectile motion",
      "Circular motion basics"
    ],
    resources: ["HC Verma Ch.3-4", "NCERT 11 Ch.3-4", "Cengage PYQs"]
  },
  {
    id: "ph03",
    name: "Newton's Laws of Motion",
    phase: 1,
    weightage: "high",
    prereq: "Kinematics",
    subtopics: [
      "First, Second, Third Laws",
      "Free body diagrams (FBD)",
      "Friction — static, kinetic, rolling",
      "Pulley and constraint problems",
      "Pseudo force & non-inertial frames"
    ],
    resources: ["HC Verma Ch.5-6", "NCERT 11 Ch.5", "Irodov selections"]
  },
  {
    id: "ph04",
    name: "Work, Energy & Power",
    phase: 1,
    weightage: "high",
    prereq: "Newton's Laws",
    subtopics: [
      "Work-energy theorem",
      "Conservative & non-conservative forces",
      "Potential energy & energy conservation",
      "Power and its applications",
      "Spring problems"
    ],
    resources: ["HC Verma Ch.8", "NCERT 11 Ch.6"]
  },
  {
    id: "ph05",
    name: "Center of Mass & Momentum",
    phase: 2,
    weightage: "high",
    prereq: "Newton's Laws, Work-Energy",
    subtopics: [
      "Centre of mass — system of particles",
      "Conservation of linear momentum",
      "Collisions — elastic, inelastic, perfectly inelastic",
      "Impulse-momentum theorem",
      "Rocket propulsion"
    ],
    resources: ["HC Verma Ch.9", "NCERT 11 Ch.7"]
  },
  {
    id: "ph06",
    name: "Rotational Motion",
    phase: 2,
    weightage: "high",
    prereq: "Newton's Laws, Center of Mass",
    subtopics: [
      "Torque & moment of inertia",
      "Parallel & perpendicular axis theorems",
      "Angular momentum & conservation",
      "Rolling without slipping",
      "Rotational kinetic energy"
    ],
    resources: ["HC Verma Ch.10", "NCERT 11 Ch.7"]
  },
  {
    id: "ph07",
    name: "Gravitation",
    phase: 2,
    weightage: "medium",
    prereq: "Newton's Laws",
    subtopics: [
      "Newton's law of gravitation",
      "Gravitational field & potential",
      "Satellites — orbital & escape velocity",
      "Kepler's laws",
      "Variation of g"
    ],
    resources: ["HC Verma Ch.11", "NCERT 11 Ch.8"]
  },
  {
    id: "ph08",
    name: "Fluid Mechanics",
    phase: 2,
    weightage: "medium",
    prereq: "Newton's Laws, Work-Energy",
    subtopics: [
      "Pressure, Pascal's law, Archimedes' principle",
      "Bernoulli's theorem",
      "Viscosity & Stokes' law",
      "Surface tension & capillarity"
    ],
    resources: ["HC Verma Ch.13", "NCERT 11 Ch.10"]
  },
  {
    id: "ph09",
    name: "Waves & Sound",
    phase: 2,
    weightage: "medium",
    prereq: "SHM",
    subtopics: [
      "Wave equation, speed, superposition",
      "Standing waves, resonance",
      "Beats & Doppler effect",
      "Sound intensity & decibels"
    ],
    resources: ["HC Verma Ch.15-16", "NCERT 11 Ch.15"]
  },
  {
    id: "ph10",
    name: "Simple Harmonic Motion (SHM)",
    phase: 2,
    weightage: "high",
    prereq: "Newton's Laws, Work-Energy",
    subtopics: [
      "SHM definition, phase, amplitude",
      "Spring-mass systems",
      "Simple & compound pendulums",
      "Superposition of SHMs",
      "Energy in SHM"
    ],
    resources: ["HC Verma Ch.12", "NCERT 11 Ch.14"]
  },
  {
    id: "ph11",
    name: "Thermodynamics",
    phase: 2,
    weightage: "high",
    prereq: "Kinetic Theory basics",
    subtopics: [
      "Zeroth, First & Second Laws",
      "Internal energy, heat, work",
      "Isothermal, adiabatic, isobaric, isochoric processes",
      "Carnot engine & efficiency",
      "Entropy concept"
    ],
    resources: ["HC Verma Ch.26-27", "NCERT 11 Ch.12"]
  },
  {
    id: "ph12",
    name: "Electrostatics",
    phase: 3,
    weightage: "high",
    prereq: "Vectors, Basic Calculus",
    subtopics: [
      "Coulomb's law",
      "Electric field & field lines",
      "Electric potential & potential energy",
      "Gauss's law & applications",
      "Capacitors — series/parallel, energy stored, dielectrics"
    ],
    resources: ["HC Verma Vol.2 Ch.29-31", "NCERT 12 Ch.1-2"]
  },
  {
    id: "ph13",
    name: "Current Electricity",
    phase: 3,
    weightage: "high",
    prereq: "Electrostatics",
    subtopics: [
      "Ohm's law, resistivity, drift velocity",
      "Kirchhoff's laws — KCL, KVL",
      "Wheatstone bridge, potentiometer",
      "Cells — EMF, internal resistance",
      "RC circuits"
    ],
    resources: ["HC Verma Vol.2 Ch.32", "NCERT 12 Ch.3"]
  },
  {
    id: "ph14",
    name: "Magnetic Effects of Current",
    phase: 3,
    weightage: "high",
    prereq: "Current Electricity",
    subtopics: [
      "Biot-Savart law",
      "Ampere's circuital law",
      "Force on current-carrying conductor",
      "Galvanometer, Ammeter, Voltmeter",
      "Magnetic field of solenoid & toroid"
    ],
    resources: ["HC Verma Vol.2 Ch.34-35", "NCERT 12 Ch.4"]
  },
  {
    id: "ph15",
    name: "Electromagnetic Induction & AC",
    phase: 3,
    weightage: "high",
    prereq: "Magnetic Effects",
    subtopics: [
      "Faraday's & Lenz's law",
      "Self & mutual inductance",
      "LC, LR, LCR circuits",
      "Resonance in AC",
      "Transformers & power transmission"
    ],
    resources: ["HC Verma Vol.2 Ch.38-40", "NCERT 12 Ch.6-7"]
  },
  {
    id: "ph16",
    name: "Ray & Wave Optics",
    phase: 3,
    weightage: "high",
    prereq: "Basic Math, Waves",
    subtopics: [
      "Reflection, Refraction, TIR",
      "Lenses & mirrors — image formation",
      "Prism & dispersion",
      "Wave optics — interference, diffraction",
      "Polarization"
    ],
    resources: ["HC Verma Vol.2 Ch.18-20", "NCERT 12 Ch.9-10"]
  },
  {
    id: "ph17",
    name: "Modern Physics",
    phase: 3,
    weightage: "high",
    prereq: "Electrostatics, Wave Optics",
    subtopics: [
      "Photoelectric effect & Einstein's equation",
      "de Broglie wavelength",
      "Bohr model & hydrogen spectrum",
      "Radioactivity — alpha, beta, gamma",
      "Nuclear reactions & binding energy"
    ],
    resources: ["HC Verma Vol.2 Ch.43-45", "NCERT 12 Ch.11-12"]
  },
  {
    id: "ph18",
    name: "Semiconductors & Devices",
    phase: 3,
    weightage: "low",
    prereq: "Modern Physics",
    subtopics: [
      "P-N junction diode",
      "Zener diode & rectifiers",
      "Transistor basics",
      "Logic gates — AND, OR, NOT, NAND, NOR"
    ],
    resources: ["NCERT 12 Ch.14"]
  }
];

const CHEMISTRY = [
  {
    id: "ch01",
    name: "Atomic Structure",
    phase: 1,
    weightage: "high",
    prereq: "None — start here",
    subtopics: [
      "Bohr's model & its limitations",
      "Quantum numbers & orbitals",
      "Electronic configuration",
      "Aufbau, Hund's rule, Pauli exclusion",
      "Photoelectric effect"
    ],
    resources: ["NCERT 11 Ch.2", "JD Lee (selected)", "PYQs"]
  },
  {
    id: "ch02",
    name: "Periodic Table & Periodicity",
    phase: 1,
    weightage: "medium",
    prereq: "Atomic Structure",
    subtopics: [
      "Modern periodic law",
      "Trends: atomic radius, IE, EA, EN",
      "Anomalies in periodic trends",
      "s, p, d, f block elements overview"
    ],
    resources: ["NCERT 11 Ch.3"]
  },
  {
    id: "ch03",
    name: "Chemical Bonding & Molecular Structure",
    phase: 1,
    weightage: "high",
    prereq: "Atomic Structure, Periodic Table",
    subtopics: [
      "Ionic & covalent bonds",
      "VSEPR theory — shapes of molecules",
      "Valence bond theory & hybridization",
      "MO theory (H2, O2, N2)",
      "Resonance & formal charges",
      "Coordinate covalent, hydrogen bonds"
    ],
    resources: ["NCERT 11 Ch.4", "JD Lee"]
  },
  {
    id: "ch04",
    name: "Mole Concept & Stoichiometry",
    phase: 1,
    weightage: "high",
    prereq: "Basic Math",
    subtopics: [
      "Mole, Avogadro's number",
      "Empirical & molecular formula",
      "Limiting reagent problems",
      "Percentage composition, yield",
      "Concentration — molarity, molality, normality"
    ],
    resources: ["NCERT 11 Ch.1", "P. Bahadur Problems"]
  },
  {
    id: "ch05",
    name: "States of Matter (Gaseous & Liquid)",
    phase: 2,
    weightage: "medium",
    prereq: "Mole Concept",
    subtopics: [
      "Gas laws — Boyle, Charles, Gay-Lussac",
      "Ideal Gas equation",
      "Kinetic theory of gases",
      "Real gases & Van der Waals",
      "Liquefaction, critical point"
    ],
    resources: ["NCERT 11 Ch.5"]
  },
  {
    id: "ch06",
    name: "Thermodynamics (Chemical)",
    phase: 2,
    weightage: "high",
    prereq: "Mole Concept, States of Matter",
    subtopics: [
      "System, surroundings, state functions",
      "Enthalpy, Hess's law",
      "Bond dissociation energies",
      "Entropy & Gibbs free energy",
      "Spontaneity criteria"
    ],
    resources: ["NCERT 11 Ch.6", "Atkins (selected)"]
  },
  {
    id: "ch07",
    name: "Chemical Equilibrium",
    phase: 2,
    weightage: "high",
    prereq: "Thermodynamics, Mole Concept",
    subtopics: [
      "Law of mass action, Kc, Kp",
      "Relationship Kc vs Kp",
      "Le Chatelier's principle",
      "Ionic equilibrium — acids, bases",
      "Buffer solutions, pH",
      "Solubility product (Ksp)"
    ],
    resources: ["NCERT 11 Ch.7", "N. Avasthi Problems"]
  },
  {
    id: "ch08",
    name: "Redox Reactions",
    phase: 2,
    weightage: "medium",
    prereq: "Mole Concept, Bonding",
    subtopics: [
      "Oxidation state rules",
      "Balancing redox — half-reaction method",
      "Oxidizing & reducing agents",
      "Disproportionation reactions"
    ],
    resources: ["NCERT 11 Ch.8"]
  },
  {
    id: "ch09",
    name: "Solutions & Colligative Properties",
    phase: 2,
    weightage: "medium",
    prereq: "Mole Concept, States of Matter",
    subtopics: [
      "Types of solutions, solubility",
      "Vapour pressure — Raoult's law",
      "Colligative properties — depression of freezing point, elevation of boiling point",
      "Van't Hoff factor"
    ],
    resources: ["NCERT 12 Ch.2", "P. Bahadur"]
  },
  {
    id: "ch10",
    name: "Electrochemistry",
    phase: 3,
    weightage: "high",
    prereq: "Redox, Thermodynamics, Solutions",
    subtopics: [
      "Galvanic & electrolytic cells",
      "Standard electrode potential, EMF",
      "Nernst equation",
      "Electrolysis & Faraday's laws",
      "Kohlrausch's law, conductance"
    ],
    resources: ["NCERT 12 Ch.3", "N. Avasthi"]
  },
  {
    id: "ch11",
    name: "Chemical Kinetics",
    phase: 3,
    weightage: "high",
    prereq: "Equilibrium, Mole Concept",
    subtopics: [
      "Rate of reaction, rate law",
      "Order & molecularity",
      "Integrated rate equations (0, 1st, 2nd order)",
      "Half-life calculations",
      "Arrhenius equation & activation energy",
      "Catalysis"
    ],
    resources: ["NCERT 12 Ch.4", "P. Bahadur"]
  },
  {
    id: "ch12",
    name: "Organic Chemistry — Basics",
    phase: 2,
    weightage: "high",
    prereq: "Bonding, Atomic Structure",
    subtopics: [
      "Hybridization & shapes",
      "IUPAC nomenclature",
      "Isomerism — structural, stereoisomerism",
      "Inductive, mesomeric, hyperconjugation effects",
      "Reaction intermediates — carbocations, carbanions, radicals"
    ],
    resources: ["NCERT 11 Ch.12-13", "Morrison Boyd (Ch.1-5)"]
  },
  {
    id: "ch13",
    name: "Hydrocarbons",
    phase: 2,
    weightage: "high",
    prereq: "Organic Basics",
    subtopics: [
      "Alkanes — preparation, reactions",
      "Alkenes — addition reactions, Markovnikov's rule",
      "Alkynes — acidic character, reactions",
      "Aromatic — Benzene, electrophilic substitution"
    ],
    resources: ["NCERT 11 Ch.13", "Morrison Boyd"]
  },
  {
    id: "ch14",
    name: "Organic Reactions & Named Reactions",
    phase: 3,
    weightage: "high",
    prereq: "Hydrocarbons, Organic Basics",
    subtopics: [
      "Aldol, Cannizzaro, Claisen condensation",
      "Gabriel synthesis, Hoffmann bromamide",
      "Reimer-Tiemann, Kolbe's reaction",
      "SN1, SN2, E1, E2 mechanisms",
      "Diazotization & coupling reactions"
    ],
    resources: ["Morrison Boyd", "JEE PYQs — Organic"]
  },
  {
    id: "ch15",
    name: "Biomolecules & Polymers",
    phase: 3,
    weightage: "low",
    prereq: "Organic Basics",
    subtopics: [
      "Carbohydrates — mono, di, polysaccharides",
      "Proteins — amino acids, peptide bond",
      "Nucleic acids — DNA, RNA",
      "Polymers — addition, condensation"
    ],
    resources: ["NCERT 12 Ch.14-15"]
  },
  {
    id: "ch16",
    name: "Coordination Compounds",
    phase: 3,
    weightage: "high",
    prereq: "Bonding, Periodic Table",
    subtopics: [
      "Werner's theory, ligands, coordination number",
      "IUPAC nomenclature of complexes",
      "Crystal field theory — splitting",
      "Color, magnetic properties",
      "Isomerism in coordination compounds"
    ],
    resources: ["NCERT 12 Ch.9", "JD Lee"]
  },
  {
    id: "ch17",
    name: "s-Block & p-Block Elements",
    phase: 2,
    weightage: "medium",
    prereq: "Periodic Table, Bonding",
    subtopics: [
      "Alkali & alkaline earth metals",
      "Anomalous behaviour of Li, Be",
      "Group 13-18 elements",
      "Ozone, allotropes of carbon, phosphorus",
      "Halogen family"
    ],
    resources: ["NCERT 11-12 Ch.10-11, Ch.7-8"]
  },
  {
    id: "ch18",
    name: "d & f Block + Metallurgy",
    phase: 3,
    weightage: "medium",
    prereq: "Periodic Table, Redox",
    subtopics: [
      "Transition metals — properties",
      "Variable oxidation states",
      "Metallurgy — concentration, reduction, refining",
      "Lanthanides & actinides"
    ],
    resources: ["NCERT 12 Ch.8, Ch.6"]
  }
];

const MATH = [
  {
    id: "ma01",
    name: "Algebra Fundamentals",
    phase: 1,
    weightage: "high",
    prereq: "None — start here",
    subtopics: [
      "Number systems — real, complex, irrational",
      "Surds, indices, logarithms",
      "Algebraic identities",
      "Linear & quadratic equations",
      "Inequalities — linear, quadratic, modulus"
    ],
    resources: ["NCERT 11 Ch.1,5", "SL Loney Algebra"]
  },
  {
    id: "ma02",
    name: "Trigonometry",
    phase: 1,
    weightage: "high",
    prereq: "Algebra Fundamentals",
    subtopics: [
      "Ratios, identities, allied angles",
      "Multiple & sub-multiple angle formulas",
      "Inverse trigonometric functions",
      "Trigonometric equations — general solutions",
      "Heights & distances"
    ],
    resources: ["NCERT 11 Ch.3", "SL Loney Trigonometry"]
  },
  {
    id: "ma03",
    name: "Quadratic Equations & Expressions",
    phase: 1,
    weightage: "high",
    prereq: "Algebra Fundamentals",
    subtopics: [
      "Nature of roots (discriminant)",
      "Sum & product of roots",
      "Quadratic inequalities",
      "Graph of quadratic",
      "Common roots, max/min of quadratic"
    ],
    resources: ["NCERT 11 Ch.5", "A. Das Gupta"]
  },
  {
    id: "ma04",
    name: "Sequences & Series",
    phase: 1,
    weightage: "high",
    prereq: "Algebra Fundamentals",
    subtopics: [
      "AP — nth term, sum formulas",
      "GP — nth term, sum, infinite GP",
      "HP and AM-GM-HM inequality",
      "Special series — sum of n², n³",
      "Method of differences"
    ],
    resources: ["NCERT 11 Ch.9"]
  },
  {
    id: "ma05",
    name: "Permutations & Combinations",
    phase: 2,
    weightage: "high",
    prereq: "Algebra Fundamentals",
    subtopics: [
      "Fundamental counting principle",
      "Permutations with & without repetition",
      "Combinations — selection problems",
      "Arrangement with constraints",
      "Derangements"
    ],
    resources: ["NCERT 11 Ch.7", "A. Das Gupta"]
  },
  {
    id: "ma06",
    name: "Binomial Theorem",
    phase: 2,
    weightage: "high",
    prereq: "Sequences, P&C",
    subtopics: [
      "Binomial expansion, general term",
      "Middle term, greatest coefficient",
      "Multinomial theorem",
      "Properties of binomial coefficients"
    ],
    resources: ["NCERT 11 Ch.8", "Arihant Algebra"]
  },
  {
    id: "ma07",
    name: "Complex Numbers",
    phase: 2,
    weightage: "high",
    prereq: "Algebra Fundamentals, Trigonometry",
    subtopics: [
      "Argand plane, modulus, argument",
      "Polar form, Euler's formula",
      "De Moivre's theorem",
      "Cube roots of unity",
      "Locus problems in complex plane"
    ],
    resources: ["NCERT 11 Ch.5", "Arihant Algebra"]
  },
  {
    id: "ma08",
    name: "Functions & Relations",
    phase: 1,
    weightage: "high",
    prereq: "Algebra Fundamentals, Trigonometry",
    subtopics: [
      "Domain, range, codomain",
      "Types of functions — injective, surjective, bijective",
      "Inverse functions",
      "Composite functions",
      "Even/odd, periodic functions",
      "Graphs of standard functions"
    ],
    resources: ["NCERT 11 Ch.2", "Arihant Calculus"]
  },
  {
    id: "ma09",
    name: "Limits & Continuity",
    phase: 2,
    weightage: "high",
    prereq: "Functions",
    subtopics: [
      "Indeterminate forms — L'Hôpital, expansion",
      "Standard limits",
      "Left-hand & right-hand limits",
      "Continuity — definition, types of discontinuity",
      "Intermediate value theorem"
    ],
    resources: ["NCERT 11 Ch.13", "Arihant Calculus"]
  },
  {
    id: "ma10",
    name: "Differentiation",
    phase: 2,
    weightage: "high",
    prereq: "Limits & Continuity",
    subtopics: [
      "First principles, standard derivatives",
      "Chain, product, quotient rules",
      "Implicit & parametric differentiation",
      "Higher order derivatives",
      "Rolle's & LMVT theorem"
    ],
    resources: ["NCERT 11 Ch.13", "Arihant Calculus"]
  },
  {
    id: "ma11",
    name: "Applications of Derivatives",
    phase: 2,
    weightage: "high",
    prereq: "Differentiation",
    subtopics: [
      "Tangents & normals",
      "Monotonicity — increasing, decreasing",
      "Maxima & Minima (first & second derivative test)",
      "Rate of change problems",
      "Approximation & errors"
    ],
    resources: ["NCERT 12 Ch.6", "Arihant Calculus"]
  },
  {
    id: "ma12",
    name: "Integration (Indefinite)",
    phase: 3,
    weightage: "high",
    prereq: "Differentiation",
    subtopics: [
      "Standard integrals, substitution",
      "Integration by parts (ILATE)",
      "Partial fractions",
      "Integration of rational & irrational functions",
      "Trigonometric integrals"
    ],
    resources: ["NCERT 12 Ch.7", "Arihant Calculus"]
  },
  {
    id: "ma13",
    name: "Definite Integration & Area",
    phase: 3,
    weightage: "high",
    prereq: "Indefinite Integration",
    subtopics: [
      "Properties of definite integrals",
      "Reduction formulas (Wallis)",
      "Area under curves",
      "Area between two curves",
      "Summation as integration"
    ],
    resources: ["NCERT 12 Ch.8", "Arihant Calculus"]
  },
  {
    id: "ma14",
    name: "Differential Equations",
    phase: 3,
    weightage: "medium",
    prereq: "Definite Integration",
    subtopics: [
      "Order & degree",
      "Variable separable method",
      "Homogeneous equations",
      "Linear first order ODE",
      "Exact equations"
    ],
    resources: ["NCERT 12 Ch.9"]
  },
  {
    id: "ma15",
    name: "Coordinate Geometry — Straight Lines",
    phase: 2,
    weightage: "high",
    prereq: "Trigonometry, Algebra",
    subtopics: [
      "Slope, various forms of line",
      "Angle between lines, parallel/perpendicular",
      "Foot of perpendicular, image in a line",
      "Family of lines, concurrent lines",
      "Distance formulas"
    ],
    resources: ["NCERT 11 Ch.10", "SL Loney Coord Geometry"]
  },
  {
    id: "ma16",
    name: "Circles",
    phase: 2,
    weightage: "high",
    prereq: "Straight Lines",
    subtopics: [
      "General equation, centre, radius",
      "Tangent & normal to circle",
      "Chord of contact, pole-polar",
      "Family of circles",
      "Radical axis"
    ],
    resources: ["NCERT 11 Ch.11", "SL Loney Coord Geometry"]
  },
  {
    id: "ma17",
    name: "Conic Sections (Parabola, Ellipse, Hyperbola)",
    phase: 3,
    weightage: "high",
    prereq: "Circles, Straight Lines",
    subtopics: [
      "Standard equations, eccentricity",
      "Tangent, normal, chord of contact",
      "Properties of ellipse & hyperbola",
      "Asymptotes of hyperbola",
      "Conjugate hyperbola"
    ],
    resources: ["NCERT 11 Ch.11", "SL Loney / Arihant"]
  },
  {
    id: "ma18",
    name: "3D Geometry",
    phase: 3,
    weightage: "high",
    prereq: "Vectors, Coord Geometry",
    subtopics: [
      "Direction cosines & ratios",
      "Equations of line in 3D",
      "Equation of plane",
      "Skew lines, distance between lines",
      "Shortest distance formulas"
    ],
    resources: ["NCERT 12 Ch.11"]
  },
  {
    id: "ma19",
    name: "Vectors",
    phase: 2,
    weightage: "high",
    prereq: "Trigonometry, Algebra",
    subtopics: [
      "Vector addition, subtraction, scalar multiplication",
      "Dot product & cross product",
      "Scalar triple product",
      "Vector equations of lines & planes",
      "Geometrical applications"
    ],
    resources: ["NCERT 12 Ch.10"]
  },
  {
    id: "ma20",
    name: "Probability",
    phase: 3,
    weightage: "high",
    prereq: "Permutations & Combinations",
    subtopics: [
      "Classical definition, addition theorem",
      "Conditional probability, Bayes' theorem",
      "Independent events",
      "Random variables, expectation",
      "Binomial & Poisson distributions"
    ],
    resources: ["NCERT 12 Ch.13"]
  },
  {
    id: "ma21",
    name: "Matrices & Determinants",
    phase: 3,
    weightage: "high",
    prereq: "Algebra Fundamentals",
    subtopics: [
      "Matrix operations, types of matrices",
      "Determinant — properties, expansion",
      "Inverse of matrix, adjoint",
      "Solving linear equations (Cramer's rule)",
      "Cayley-Hamilton theorem"
    ],
    resources: ["NCERT 12 Ch.3-4"]
  }
];

const MILESTONES = [
  { id: "m01", icon: "🌅", title: "Phase 1 Complete", desc: "Foundation Reset done — basics of all 3 subjects locked in. You can solve class 10-level problems fluently.", date: "Sep 30, 2026", achieved: false },
  { id: "m02", icon: "📝", title: "First Mock Attempt", desc: "Sat your first full JEE mock test. Score doesn't matter — experience does. You know your weak areas.", date: "Oct 15, 2026", achieved: false },
  { id: "m03", icon: "⚡", title: "30 Percentile Mock", desc: "Scored 30+ percentile consistently in mocks. Phase 2 topics making their mark.", date: "Nov 30, 2026", achieved: false },
  { id: "m04", icon: "🧮", title: "Calculus Unlocked", desc: "Limits, derivatives, and basic integration mastered. The most important JEE math tool is in your arsenal.", date: "Dec 15, 2026", achieved: false },
  { id: "m05", icon: "🔬", title: "Phase 2 Complete", desc: "All Class 11 high-weightage chapters done. You're now past the halfway point.", date: "Dec 31, 2026", achieved: false },
  { id: "m06", icon: "⚡", title: "50 Percentile Mock", desc: "Crossed 50 percentile in a full mock. The momentum is building. Keep going.", date: "Jan 31, 2027", achieved: false },
  { id: "m07", icon: "🧪", title: "Organic Chemistry Mastered", desc: "All named reactions, mechanisms (SN1/SN2/E1/E2) learned. Organic becomes a scoring powerhouse.", date: "Feb 28, 2027", achieved: false },
  { id: "m08", icon: "📐", title: "Integration Mastered", desc: "Definite + indefinite integration fully done. Area under curves, Wallis formula — all in.", date: "Feb 28, 2027", achieved: false },
  { id: "m09", icon: "🏗", title: "Phase 3 Complete", desc: "All Class 12 topics done. You now have the full JEE syllabus covered once.", date: "Mar 31, 2027", achieved: false },
  { id: "m10", icon: "🔥", title: "80 Percentile Mock", desc: "Broke 80 percentile. You are now a serious JEE contender. Error analysis is your superpower.", date: "Apr 30, 2027", achieved: false },
  { id: "m11", icon: "📚", title: "PYQ Marathon Done", desc: "Solved PYQs for all chapters from last 10 years. JEE patterns are second nature to you.", date: "May 31, 2027", achieved: false },
  { id: "m12", icon: "🏆", title: "95+ Percentile Mock", desc: "Hit 95 percentile+ in a full mock test. You're in elite territory. Game time is near.", date: "Jun 15, 2027", achieved: false },
  { id: "m13", icon: "🚀", title: "JEE Mains 2027", desc: "JEE Mains attempt. Your one shot. Everything you've built leads to this moment.", date: "Jan/Apr 2027", achieved: false },
  { id: "m14", icon: "👑", title: "99 PERCENTILE", desc: "The goal. The mission. One shot, one kill. You're an IITian.", date: "Result Day 2027", achieved: false }
];

// ============ STORAGE HELPERS ============

function saveProgress(key, val) {
  try { localStorage.setItem('jee2027_' + key, JSON.stringify(val)); } catch(e) {}
}

function loadProgress(key, fallback) {
  try {
    const v = localStorage.getItem('jee2027_' + key);
    return v !== null ? JSON.parse(v) : fallback;
  } catch(e) { return fallback; }
}

// ============ INIT STATE ============

let completedTopics = loadProgress('topics', {});
let completedSubs = loadProgress('subtopics', {});
let achievedMilestones = loadProgress('milestones', {});

// ============ TAB SWITCHING ============

function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.getElementById('btn-' + tab).classList.add('active');
}

// ============ RENDER SUBJECT ============

function renderSubject(data, containerId, subject) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const phaseColors = { 1: '#6c63ff', 2: '#38bdf8', 3: '#fb923c' };
  const phaseLabels = { 1: 'Phase 1 — Foundation', 2: 'Phase 2 — Build', 3: 'Phase 3 — Advanced' };

  let html = '';

  // Group by phase
  [1, 2, 3].forEach(phase => {
    const chapters = data.filter(c => c.phase === phase);
    if (!chapters.length) return;

    html += `
      <div class="phase-section-label" style="
        font-size:0.72rem; font-weight:700; letter-spacing:2px; text-transform:uppercase;
        color: ${phaseColors[phase]}; margin: 1.5rem 0 0.8rem; padding-left:4px;
      ">${phaseLabels[phase]}</div>
    `;

    chapters.forEach(ch => {
      const isDone = !!completedTopics[ch.id];
      const wTag = `<span class="tag tag-${ch.weightage}">${ch.weightage.toUpperCase()} WEIGHT</span>`;
      const phaseTag = `<span class="tag tag-phase">Phase ${ch.phase}</span>`;

      const subsHtml = ch.subtopics.map((sub, i) => {
        const subId = `${ch.id}_sub${i}`;
        const subDone = !!completedSubs[subId];
        return `
          <div class="subtopic-item">
            <input type="checkbox" class="subtopic-check" id="${subId}" ${subDone ? 'checked' : ''}
              onchange="toggleSubtopic('${subId}', '${ch.id}', '${subject}')" />
            <label for="${subId}" style="cursor:pointer; ${subDone ? 'text-decoration:line-through; opacity:0.5;' : ''}">${sub}</label>
          </div>`;
      }).join('');

      const resourcesHtml = ch.resources.map(r => `<span class="resource-chip">📖 ${r}</span>`).join('');

      html += `
        <div class="chapter-card ${isDone ? 'done-card' : ''}" id="card-${ch.id}" style="${isDone ? 'opacity:0.7;' : ''}">
          <div class="chapter-header">
            <div onclick="event.stopPropagation()" style="display:flex;align-items:center;flex-shrink:0">
              <input type="checkbox" class="chapter-check" id="chk-${ch.id}" ${isDone ? 'checked' : ''}
                onchange="toggleChapter('${ch.id}', '${subject}')" />
            </div>
            <div class="chapter-info" onclick="toggleCard('${ch.id}')" style="cursor:pointer;flex:1">
              <div class="chapter-name" id="name-${ch.id}" style="${isDone ? 'text-decoration:line-through; opacity:0.6;' : ''}">${ch.name}</div>
              <div class="chapter-meta">${wTag}${phaseTag}</div>
            </div>
            <span class="chapter-expand" onclick="toggleCard('${ch.id}')" style="cursor:pointer">▼</span>
          </div>
          <div class="chapter-body">
            <div class="prereq-row"><strong>🔗 Prerequisite:</strong> ${ch.prereq}</div>
            <div class="subtopics">${subsHtml}</div>
            <div class="resources-row">${resourcesHtml}</div>
          </div>
        </div>`;
    });
  });

  container.innerHTML = html;
}

// ============ TOGGLE HANDLERS ============

function toggleCard(id) {
  const card = document.getElementById('card-' + id);
  if (card) card.classList.toggle('open');
}

function toggleChapter(id, subject) {
  const chk = document.getElementById('chk-' + id);
  if (!chk) return;
  const isDone = chk.checked;
  completedTopics[id] = isDone;
  saveProgress('topics', completedTopics);
  updateStats();

  // Visual update
  const card = document.getElementById('card-' + id);
  const nameEl = document.getElementById('name-' + id);
  if (card) {
    card.style.opacity = isDone ? '0.7' : '1';
  }
  if (nameEl) {
    nameEl.style.textDecoration = isDone ? 'line-through' : 'none';
    nameEl.style.opacity = isDone ? '0.6' : '1';
  }
}

function toggleSubtopic(subId, chapterId, subject) {
  const chk = document.getElementById(subId);
  completedSubs[subId] = chk.checked;
  saveProgress('subtopics', completedSubs);
  const label = chk.nextElementSibling;
  if (label) {
    label.style.textDecoration = chk.checked ? 'line-through' : 'none';
    label.style.opacity = chk.checked ? '0.5' : '1';
  }
  updateStats();
}

// ============ MILESTONES ============

function renderMilestones() {
  const grid = document.getElementById('milestones-grid');
  if (!grid) return;

  grid.innerHTML = MILESTONES.map(m => {
    const done = !!achievedMilestones[m.id];
    return `
      <div class="milestone-card ${done ? 'achieved' : ''}" id="ms-${m.id}" onclick="toggleMilestone('${m.id}')">
        <div class="milestone-icon">${m.icon}</div>
        <div class="milestone-title">${m.title}</div>
        <div class="milestone-desc">${m.desc}</div>
        <div class="milestone-date">📅 ${m.date}</div>
        <span class="milestone-status ${done ? 'status-achieved' : 'status-pending'}">
          ${done ? '✅ Achieved' : '⏳ Pending'}
        </span>
      </div>`;
  }).join('');
}

function toggleMilestone(id) {
  achievedMilestones[id] = !achievedMilestones[id];
  saveProgress('milestones', achievedMilestones);
  renderMilestones();
}

// ============ STATS UPDATE ============

function updateStats() {
  const allTopics = [...PHYSICS, ...CHEMISTRY, ...MATH];
  const totalTopics = allTopics.length;
  const doneCount = allTopics.filter(t => completedTopics[t.id]).length;
  const pct = Math.round((doneCount / totalTopics) * 100);

  document.getElementById('topics-done').textContent = doneCount;
  document.getElementById('overall-pct').textContent = pct + '%';

  const bar = document.getElementById('global-bar');
  if (bar) bar.style.width = pct + '%';
}

// ============ COUNTDOWN ============

function updateCountdown() {
  // JEE Mains 2027 approx date — Jan 15, 2027
  const jeeDateMains = new Date('2027-01-15T09:00:00');
  const now = new Date();
  const diff = jeeDateMains - now;

  const el = document.getElementById('days-left');
  if (el) {
    if (diff <= 0) {
      el.textContent = '🎯';
    } else {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      el.textContent = days.toLocaleString();
    }
  }
}

// ============ INIT ============

function init() {
  updateCountdown();
  setInterval(updateCountdown, 60000);

  renderSubject(PHYSICS, 'physics-content', 'physics');
  renderSubject(CHEMISTRY, 'chemistry-content', 'chemistry');
  renderSubject(MATH, 'math-content', 'math');
  renderMilestones();
  updateStats();

  // Animate progress bar on load
  setTimeout(() => updateStats(), 300);

  // Register Service Worker for PWA / offline support
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('[PWA] Service Worker registered:', reg.scope))
        .catch((err) => console.warn('[PWA] Service Worker registration failed:', err));
    });
  }
}

document.addEventListener('DOMContentLoaded', init);
