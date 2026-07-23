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

// ============ WEIGHTAGE DATA ============

const WEIGHTAGE_DATA = [
  // ============ PHYSICS ============
  {
    subject: 'physics', icon: '⚡', label: 'Physics', expertTag: 'Dr. Arjun Mehta — Physics Resource Person', tier: 1,
    name: 'Electrostatics & Capacitance',
    weightage: '10–12%',
    desc: 'This chapter alone can put you 12 marks ahead. 3–4 questions per paper without fail.',
    resources: ['NCERT 12 Ch1-2', 'HC Verma Vol2 Ch29-31', 'DC Pandey Electrostatics'],
    subtopics: [
      { name: "Coulomb's Law — force between multiple charges", priority: 'Highest' },
      { name: 'Electric field due to point charge, ring, disc, shell, wire', priority: 'Highest' },
      { name: 'Electric dipole — field, torque, potential energy', priority: 'Highest' },
      { name: "Gauss's Law — sphere, cylinder, plane applications", priority: 'Highest' },
      { name: 'Electric potential — relation with field, equipotential', priority: 'Highest' },
      { name: 'Parallel plate capacitor — with/without dielectric', priority: 'Highest' },
      { name: 'Energy stored in capacitor', priority: 'Highest' },
      { name: 'Series & Parallel capacitor combinations', priority: 'Highest' },
      { name: 'RC Circuits — charging, discharging, time constant', priority: 'Highest' },
    ]
  },
  {
    subject: 'physics', icon: '⚡', label: 'Physics', tier: 1,
    name: 'Current Electricity',
    weightage: '8–12%',
    desc: 'Every JEE paper has 3–4 circuit problems. Master Kirchhoff\'s Laws = easy 12 marks.',
    resources: ['HC Verma Vol2 Ch32-33', 'DC Pandey', 'NCERT 12 Ch3'],
    subtopics: [
      { name: "Ohm's Law, resistivity, temperature dependence", priority: 'Highest' },
      { name: 'Series & Parallel resistance — complex networks', priority: 'Highest' },
      { name: "Kirchhoff's Current Law (KCL) & Voltage Law (KVL)", priority: 'Highest' },
      { name: 'Wheatstone Bridge — balance condition', priority: 'Highest' },
      { name: 'Meter Bridge — finding unknown resistance', priority: 'Highest' },
      { name: 'Potentiometer — EMF comparison, internal resistance', priority: 'Highest' },
      { name: 'Galvanometer → Ammeter/Voltmeter conversion', priority: 'High' },
      { name: 'RC Circuits — time constant', priority: 'Highest' },
    ]
  },
  {
    subject: 'physics', icon: '⚡', label: 'Physics', tier: 1,
    name: 'Modern Physics',
    weightage: '8–10%',
    desc: 'Easiest scoring chapter. Pure formula + concept. Students who skip this lose free marks.',
    resources: ['NCERT 12 Ch11-14', 'HC Verma Vol2 Ch43-45'],
    subtopics: [
      { name: 'Photoelectric Effect — stopping potential, threshold frequency', priority: 'Highest' },
      { name: 'de Broglie wavelength — matter waves', priority: 'Highest' },
      { name: "Bohr's Model — energy levels, transitions", priority: 'Highest' },
      { name: 'Spectral series — Lyman, Balmer, Paschen', priority: 'Highest' },
      { name: 'Radioactive decay — alpha, beta, gamma', priority: 'Highest' },
      { name: 'Half-life, mean life, decay constant calculations', priority: 'Highest' },
      { name: 'Mass-energy equivalence — Q-value of nuclear reactions', priority: 'Highest' },
      { name: 'p-n junction, diode, rectifier, Zener diode (Mains only)', priority: 'Highest' },
    ]
  },
  {
    subject: 'physics', icon: '⚡', label: 'Physics', tier: 2,
    name: 'Kinematics & Laws of Motion',
    weightage: '~15%',
    desc: 'The backbone. If Mechanics is shaky, Physics is shaky. FBD is the #1 skill.',
    resources: ['HC Verma Vol1 Ch3-6', 'DC Pandey Mechanics Part1'],
    subtopics: [
      { name: 'Equations of motion — constant acceleration', priority: 'Highest' },
      { name: 'Relative velocity — 1D and 2D', priority: 'Highest' },
      { name: 'Projectile motion — range, height, time', priority: 'Highest' },
      { name: 'Free Body Diagram (FBD) — the #1 skill in Physics', priority: 'Highest' },
      { name: 'Static & Kinetic Friction — angle of friction', priority: 'Highest' },
      { name: 'Pulleys — Atwood machine, two-block systems', priority: 'Highest' },
      { name: 'Pseudo force in non-inertial frames', priority: 'High' },
    ]
  },
  {
    subject: 'physics', icon: '⚡', label: 'Physics', tier: 2,
    name: 'Rotational Motion',
    weightage: '8–10%',
    desc: 'Most students fear this. Master it and you\'re above 95% of competitors.',
    resources: ['HC Verma Vol1 Ch10', 'NCERT 11 Ch7'],
    subtopics: [
      { name: 'Torque — calculation for various configurations', priority: 'Highest' },
      { name: 'Moment of Inertia — rod, disc, ring, sphere', priority: 'Highest' },
      { name: 'Parallel Axis Theorem', priority: 'Highest' },
      { name: 'Angular momentum — conservation', priority: 'Highest' },
      { name: 'Rolling without slipping — conditions', priority: 'Highest' },
      { name: 'Rolling on inclined planes', priority: 'Highest' },
    ]
  },
  {
    subject: 'physics', icon: '⚡', label: 'Physics', tier: 2,
    name: 'Optics — Ray & Wave',
    weightage: '10–15%',
    desc: '3–4 questions per paper. YDSE appears in almost every single paper.',
    resources: ['HC Verma Vol2 Ch17-20', 'NCERT 12 Ch9-10'],
    subtopics: [
      { name: "Reflection from plane & spherical mirrors — mirror formula", priority: 'Highest' },
      { name: "Refraction — Snell's Law, refractive index", priority: 'Highest' },
      { name: 'Total Internal Reflection (TIR) — critical angle', priority: 'Highest' },
      { name: 'Lens maker\'s equation, thin lens formula, combination of lenses', priority: 'Highest' },
      { name: 'Prism — deviation, dispersion, minimum deviation', priority: 'Highest' },
      { name: "Young's Double Slit Experiment (YDSE) — fringe width, shift", priority: 'Highest' },
      { name: 'Interference — conditions, path difference', priority: 'Highest' },
      { name: 'Single slit diffraction — central maxima width', priority: 'Highest' },
    ]
  },
  {
    subject: 'physics', icon: '⚡', label: 'Physics', tier: 2,
    name: 'Thermodynamics & Kinetic Theory',
    weightage: '8–10%',
    desc: 'Process-based numericals + Carnot engine efficiency. Very predictable questions.',
    resources: ['NCERT 11 Ch12-13', 'HC Verma Vol2 Ch26-27'],
    subtopics: [
      { name: 'First Law — internal energy, enthalpy', priority: 'Highest' },
      { name: 'Isothermal, Adiabatic, Isochoric, Isobaric processes + Work done', priority: 'Highest' },
      { name: 'Carnot Engine — efficiency formula', priority: 'Highest' },
      { name: 'Kinetic Theory — RMS speed, average speed', priority: 'Highest' },
      { name: 'Degrees of freedom — Cv, Cp, gamma for mono/di/poly', priority: 'Highest' },
    ]
  },
  {
    subject: 'physics', icon: '⚡', label: 'Physics', tier: 3,
    name: 'EMI, AC Circuits & Magnetism',
    weightage: '8–10%',
    desc: 'Score boosters — Faraday, Lenz, RLC circuits, motional EMF.',
    resources: ['HC Verma Vol2 Ch34-38', 'NCERT 12 Ch6-8'],
    subtopics: [
      { name: "Faraday's Laws & Lenz's Law", priority: 'Highest' },
      { name: 'Motional EMF — self & mutual inductance', priority: 'Highest' },
      { name: 'Biot-Savart Law — wire, loop, solenoid', priority: 'Highest' },
      { name: 'RLC series circuit — resonance, impedance', priority: 'Highest' },
      { name: 'Cyclotron — motion of charged particle in B field', priority: 'High' },
    ]
  },

  // ============ CHEMISTRY ============
  {
    subject: 'chemistry', icon: '🧪', label: 'Chemistry', expertTag: 'Dr. Priya Nair — Chemistry Resource Person', tier: 1,
    name: 'Chemical Thermodynamics',
    weightage: '8–10%',
    desc: '3–4 questions every year without fail. Pure numerical + conceptual mix.',
    resources: ['NCERT 11 Ch6', 'OP Tandon Physical'],
    subtopics: [
      { name: 'Internal energy (U), Enthalpy (H) — relation', priority: 'Highest' },
      { name: 'Heat at constant volume (Cv) and constant pressure (Cp)', priority: 'Highest' },
      { name: "Hess's Law — formation, combustion enthalpy", priority: 'Highest' },
      { name: 'Bond dissociation energy calculations', priority: 'Highest' },
      { name: 'Entropy — disorder, spontaneity criteria', priority: 'Highest' },
      { name: 'ΔG = ΔH – TΔS — Gibbs free energy', priority: 'Highest' },
      { name: 'ΔG° = –RT ln K — relation with equilibrium constant', priority: 'Highest' },
    ]
  },
  {
    subject: 'chemistry', icon: '🧪', label: 'Chemistry', tier: 1,
    name: 'Chemical Equilibrium (Chemical + Ionic)',
    weightage: '6–8%',
    desc: 'Kc, Kp, Le Chatelier, pH of buffers — this chapter is a goldmine if understood well.',
    resources: ['NCERT 11 Ch7', 'VK Jaiswal Inorganic'],
    subtopics: [
      { name: 'Law of Mass Action — Kc, Kp, Kx definitions', priority: 'Highest' },
      { name: 'Kp = Kc(RT)^Δn — derivation and use', priority: 'Highest' },
      { name: "Le Chatelier's Principle — effect of T, P, concentration", priority: 'Highest' },
      { name: 'Degree of dissociation calculations', priority: 'Highest' },
      { name: 'Ionic equilibrium — pH of weak acid/base', priority: 'Highest' },
      { name: 'Buffer solutions — Henderson-Hasselbalch equation', priority: 'Highest' },
      { name: 'Solubility product (Ksp) — precipitation condition', priority: 'Highest' },
    ]
  },
  {
    subject: 'chemistry', icon: '🧪', label: 'Chemistry', tier: 1,
    name: 'Electrochemistry',
    weightage: '6–8%',
    desc: 'Nernst equation + Faraday\'s Laws guarantee 2–3 questions per paper.',
    resources: ['NCERT 12 Ch3', 'OP Tandon'],
    subtopics: [
      { name: 'Galvanic vs Electrolytic cells — working', priority: 'Highest' },
      { name: 'Standard electrode potential — SHE reference', priority: 'Highest' },
      { name: 'Ecell = E°cathode – E°anode', priority: 'Highest' },
      { name: 'Nernst Equation — concentration effect on EMF', priority: 'Highest' },
      { name: "Faraday's Laws of Electrolysis (1st and 2nd)", priority: 'Highest' },
      { name: 'Electrolytic products — prediction at cathode/anode', priority: 'Highest' },
    ]
  },
  {
    subject: 'chemistry', icon: '🧪', label: 'Chemistry', tier: 1,
    name: 'Chemical Kinetics',
    weightage: '6–8%',
    desc: 'Rate laws, integrated equations, and Arrhenius — all high-frequency question patterns.',
    resources: ['NCERT 12 Ch4', 'N. Awasthi Physical'],
    subtopics: [
      { name: 'Rate of reaction — average & instantaneous rate', priority: 'Highest' },
      { name: 'Order & Molecularity — difference + determination', priority: 'Highest' },
      { name: 'Zero order, First order — integrated rate equations', priority: 'Highest' },
      { name: 'Half-life — first order: t½ = 0.693/k', priority: 'Highest' },
      { name: 'Arrhenius equation — activation energy, temperature effect', priority: 'Highest' },
    ]
  },
  {
    subject: 'chemistry', icon: '🧪', label: 'Chemistry', tier: 2,
    name: 'General Organic Chemistry (GOC)',
    weightage: '5–7%',
    desc: 'THE FOUNDATION. Skip GOC = fail Organic. This gives tools to solve every reaction.',
    resources: ['MS Chauhan Organic', 'NCERT 11 Ch12'],
    subtopics: [
      { name: 'IUPAC Nomenclature — all functional group classes', priority: 'Highest' },
      { name: 'Inductive Effect (–I, +I) and its applications', priority: 'Highest' },
      { name: 'Resonance / Mesomeric Effect', priority: 'Highest' },
      { name: 'Hyperconjugation — stability of carbocations', priority: 'Highest' },
      { name: 'Carbocation, Carbanion, Free Radical stability orders', priority: 'Highest' },
      { name: 'Acidity & Basicity comparison using electronic effects', priority: 'Highest' },
      { name: "Aromaticity — Hückel's rule (4n+2 π electrons)", priority: 'Highest' },
    ]
  },
  {
    subject: 'chemistry', icon: '🧪', label: 'Chemistry', tier: 2,
    name: 'Aldehydes, Ketones & Carboxylic Acids',
    weightage: '6–8%',
    desc: 'Every JEE paper has 2–3 questions here. Named reactions = free marks if memorized.',
    resources: ['MS Chauhan Organic', 'NCERT 12 Ch12'],
    subtopics: [
      { name: 'Nucleophilic addition — mechanism for aldehydes vs ketones', priority: 'Highest' },
      { name: 'Aldol Condensation — conditions, products', priority: 'Highest' },
      { name: 'Cannizzaro Reaction — when and why it occurs', priority: 'Highest' },
      { name: 'Clemmensen Reduction & Wolff-Kishner Reduction', priority: 'Highest' },
      { name: 'Haloform reaction — iodoform test (CHI3)', priority: 'Highest' },
      { name: 'Carboxylic acid — preparation and characteristic reactions', priority: 'Highest' },
    ]
  },
  {
    subject: 'chemistry', icon: '🧪', label: 'Chemistry', tier: 2,
    name: 'Hydrocarbons (Alkanes, Alkenes, Alkynes, Benzene)',
    weightage: '6–8%',
    desc: 'Electrophilic addition, free radical, EAS directing effects — all high frequency.',
    resources: ['MS Chauhan', 'NCERT 11 Ch13-14'],
    subtopics: [
      { name: 'Free radical halogenation of alkanes — selectivity order', priority: 'Highest' },
      { name: "Alkene reactions — electrophilic addition mechanism", priority: 'Highest' },
      { name: "Markovnikov's Rule & Anti-Markovnikov (HBr + peroxide)", priority: 'Highest' },
      { name: 'Ozonolysis — products identification from structure', priority: 'Highest' },
      { name: 'Benzene — electrophilic aromatic substitution (EAS)', priority: 'Highest' },
      { name: 'Directing effects — ortho/para vs meta directors', priority: 'Highest' },
    ]
  },
  {
    subject: 'chemistry', icon: '🧪', label: 'Chemistry', tier: 3,
    name: 'Coordination Compounds',
    weightage: '6–8%',
    desc: 'Most important Inorganic chapter. 100% NCERT-based. Learn it once, score every time.',
    resources: ['NCERT 12 Ch9', 'VK Jaiswal'],
    subtopics: [
      { name: "Werner's Theory — primary & secondary valency", priority: 'Highest' },
      { name: 'IUPAC Nomenclature of complex compounds', priority: 'Highest' },
      { name: 'Structural isomerism — linkage, ionization, hydrate', priority: 'Highest' },
      { name: 'Geometric isomerism — cis/trans in square planar & octahedral', priority: 'Highest' },
      { name: 'Crystal Field Theory (CFT) — crystal field splitting', priority: 'Highest' },
      { name: 'Magnetic moment — spin-only: μ = √n(n+2) BM', priority: 'Highest' },
      { name: 'High spin vs low spin complexes — CFSE', priority: 'Highest' },
    ]
  },
  {
    subject: 'chemistry', icon: '🧪', label: 'Chemistry', tier: 3,
    name: 'P-Block Elements (Groups 13–18)',
    weightage: '6–8%',
    desc: 'Draw every oxoacid structure. JEE LOVES asking to identify the correct structure.',
    resources: ['NCERT 11 Ch11, NCERT 12 Ch7', 'VK Jaiswal Inorganic'],
    subtopics: [
      { name: 'Group 13: Borax, diborane, orthoboric acid reactions', priority: 'Highest' },
      { name: 'Group 15: Oxoacids of N and P — draw all structures', priority: 'Highest' },
      { name: 'Group 16: Allotropes of sulphur, oxoacids of S', priority: 'Highest' },
      { name: 'Group 17: Interhalogen compounds, oxoacids of Cl', priority: 'Highest' },
      { name: 'Group 18: Noble gases — preparation and uses', priority: 'High' },
    ]
  },
  {
    subject: 'chemistry', icon: '🧪', label: 'Chemistry', tier: 3,
    name: 'Chemical Bonding & Molecular Structure',
    weightage: '5–8%',
    desc: 'VSEPR geometry, MOT bond order, hybridization — fast marks if well prepared.',
    resources: ['NCERT 11 Ch4', 'VK Jaiswal'],
    subtopics: [
      { name: 'VSEPR Theory — geometry and shape of molecules', priority: 'Highest' },
      { name: 'Hybridization — sp, sp2, sp3, sp3d, sp3d2', priority: 'Highest' },
      { name: 'MOT — bond order, magnetic nature of molecules', priority: 'Highest' },
      { name: 'Dipole moment — polar vs nonpolar', priority: 'Highest' },
      { name: 'Hydrogen bonding — inter vs intramolecular effects', priority: 'Highest' },
    ]
  },

  // ============ MATHEMATICS ============
  {
    subject: 'math', icon: '📐', label: 'Mathematics', expertTag: 'Dr. Rajan Sinha — Mathematics Resource Person', tier: 1,
    name: 'Integration (Indefinite + Definite)',
    weightage: '12–15%',
    desc: 'KING of JEE Maths. Spend 20% of your Math time here. Highest weightage chapter.',
    resources: ['Cengage Integration', 'Arihant Skills'],
    subtopics: [
      { name: 'All standard integration formulas', priority: 'Highest' },
      { name: 'Substitution method — simple & complex cases', priority: 'Highest' },
      { name: 'Integration by parts — ILATE rule', priority: 'Highest' },
      { name: 'Partial fractions — all four types', priority: 'Highest' },
      { name: 'Properties of definite integrals (P0–P6)', priority: 'Critical' },
      { name: 'King property: ∫f(x)dx = ∫f(a+b-x)dx', priority: 'Critical' },
      { name: 'Even-odd function properties in definite integration', priority: 'Highest' },
      { name: 'Leibniz rule — differentiation under integral sign', priority: 'Highest' },
    ]
  },
  {
    subject: 'math', icon: '📐', label: 'Mathematics', tier: 1,
    name: 'Limits, Continuity & Differentiability',
    weightage: '6–8%',
    desc: 'Foundation for all calculus. Without LCD, integration and DEs won\'t click.',
    resources: ['Cengage Calculus', 'Arihant Problems in Calculus'],
    subtopics: [
      { name: 'Indeterminate forms — 0/0, ∞/∞, 1^∞, 0^0', priority: 'Highest' },
      { name: "L'Hôpital's Rule", priority: 'Highest' },
      { name: 'Standard limits: lim sinx/x=1, lim(1+1/n)^n=e', priority: 'Highest' },
      { name: 'Continuity at a point — left/right limit check', priority: 'Highest' },
      { name: 'Differentiability — relation with continuity', priority: 'Highest' },
      { name: 'Differentiability of |x|, |sinx|, fractional part functions', priority: 'Highest' },
    ]
  },
  {
    subject: 'math', icon: '📐', label: 'Mathematics', tier: 1,
    name: 'Application of Derivatives (AoD)',
    weightage: '8–10%',
    desc: '2–3 questions every year. Maxima-minima is the goldmine.',
    resources: ['Cengage Calculus', 'Arihant'],
    subtopics: [
      { name: 'Chain rule, product rule, quotient rule, implicit', priority: 'Highest' },
      { name: 'Tangent & Normal — equations at a point', priority: 'Highest' },
      { name: 'Monotonicity — increasing/decreasing intervals', priority: 'Highest' },
      { name: 'Maxima & Minima — first and second derivative tests', priority: 'Highest' },
      { name: "Rolle's Theorem & Mean Value Theorem", priority: 'Highest' },
      { name: 'Parametric and logarithmic differentiation', priority: 'Highest' },
    ]
  },
  {
    subject: 'math', icon: '📐', label: 'Mathematics', tier: 1,
    name: 'Differential Equations',
    weightage: '4–6%',
    desc: 'Variable separable and linear DE cover 80% of questions. Score here easily.',
    resources: ['Cengage', 'NCERT 12 Ch9'],
    subtopics: [
      { name: 'Order & Degree — identification', priority: 'Highest' },
      { name: 'Variable Separable method', priority: 'Highest' },
      { name: 'Homogeneous differential equations', priority: 'Highest' },
      { name: 'Linear DE — Integrating factor method', priority: 'Highest' },
    ]
  },
  {
    subject: 'math', icon: '📐', label: 'Mathematics', tier: 2,
    name: '3D Geometry',
    weightage: '8–10%',
    desc: 'RAPID MARK BOOSTER. 15 key formulas = every question solvable.',
    resources: ['Cengage 3D Geometry', 'SL Loney'],
    subtopics: [
      { name: 'Direction cosines & direction ratios', priority: 'Highest' },
      { name: 'Equations of a line — vector & Cartesian forms', priority: 'Highest' },
      { name: 'Equations of a plane — normal vector form', priority: 'Highest' },
      { name: 'Angle between line & plane, between two planes', priority: 'Highest' },
      { name: 'Shortest distance between skew lines', priority: 'Highest' },
      { name: 'Distance of a point from a plane', priority: 'Highest' },
    ]
  },
  {
    subject: 'math', icon: '📐', label: 'Mathematics', tier: 2,
    name: 'Circles & Conic Sections',
    weightage: '6–8%',
    desc: 'Tangents, normals, chords — predictable questions with clear patterns.',
    resources: ['SL Loney Coordinate Geometry', 'Cengage'],
    subtopics: [
      { name: 'General equation of circle — tangent, normal', priority: 'Highest' },
      { name: 'Chord of contact, family of circles', priority: 'Highest' },
      { name: 'Parabola y²=4ax — focus, directrix, parametric form (at², 2at)', priority: 'Highest' },
      { name: 'Normals to parabola — 3 normals from a point', priority: 'Highest' },
      { name: 'Ellipse — standard form, eccentricity, tangent & normal', priority: 'Highest' },
      { name: 'Rectangular hyperbola: xy = c²', priority: 'Highest' },
    ]
  },
  {
    subject: 'math', icon: '📐', label: 'Mathematics', tier: 2,
    name: 'Straight Lines & Coordinate Geometry',
    weightage: '4–6%',
    desc: 'Distance, angle, family of lines — all formula-driven and highly predictable.',
    resources: ['SL Loney', 'NCERT 11 Ch10'],
    subtopics: [
      { name: 'Various forms of line equation — slope-intercept, normal form', priority: 'Highest' },
      { name: 'Angle between two lines', priority: 'Highest' },
      { name: 'Distance of a point from a line', priority: 'Highest' },
      { name: 'Family of lines — one parameter', priority: 'Highest' },
      { name: 'Foot of perpendicular, image of a point in a line', priority: 'Highest' },
    ]
  },
  {
    subject: 'math', icon: '📐', label: 'Mathematics', tier: 3,
    name: 'Matrices & Determinants',
    weightage: '6–8%',
    desc: 'EASIEST HIGH-SCORER. Learn the formulas and score 100% here reliably.',
    resources: ['Cengage Algebra', 'NCERT 12 Ch3-4'],
    subtopics: [
      { name: 'Types of matrices — symmetric, skew-symmetric, orthogonal', priority: 'Highest' },
      { name: 'Matrix multiplication — rules and applications', priority: 'Highest' },
      { name: 'Transpose, Adjoint, Inverse — formulas', priority: 'Highest' },
      { name: 'Properties of Determinants — cofactor expansion', priority: 'Highest' },
      { name: "Solving linear equations — Cramer's rule", priority: 'Highest' },
    ]
  },
  {
    subject: 'math', icon: '📐', label: 'Mathematics', tier: 3,
    name: 'Probability',
    weightage: '5–8%',
    desc: 'Bayes theorem + binomial distribution cover 80% of JEE probability questions.',
    resources: ['Cengage', 'NCERT 12 Ch13'],
    subtopics: [
      { name: 'Conditional probability — P(A|B)', priority: 'Highest' },
      { name: "Bayes' Theorem — posterior probability", priority: 'Highest' },
      { name: 'Binomial distribution — mean = np, variance = npq', priority: 'Highest' },
      { name: 'Addition & Multiplication rules for events', priority: 'Highest' },
    ]
  },
  {
    subject: 'math', icon: '📐', label: 'Mathematics', tier: 3,
    name: 'Vectors & Complex Numbers',
    weightage: '5–7% each',
    desc: 'Formula-driven chapters. Scalar triple product and De Moivre are JEE favorites.',
    resources: ['Cengage', 'NCERT 12 Ch10-11'],
    subtopics: [
      { name: 'Dot product — geometric meaning, projection formula', priority: 'Highest' },
      { name: 'Cross product — area of parallelogram/triangle', priority: 'Highest' },
      { name: 'Scalar triple product — volume of parallelepiped', priority: 'Highest' },
      { name: 'Modulus & Argument — Argand plane representation', priority: 'Highest' },
      { name: "De Moivre's Theorem — nth powers and roots", priority: 'Highest' },
      { name: 'nth roots of unity — sum properties', priority: 'Highest' },
    ]
  },
];

let currentWeightageFilter = 'all';

function renderWeightage() {
  const container = document.getElementById('weightage-content');
  if (!container) return;

  const filtered = currentWeightageFilter === 'all'
    ? WEIGHTAGE_DATA
    : WEIGHTAGE_DATA.filter(c => c.subject === currentWeightageFilter);

  // Group by subject
  const subjects = ['physics', 'chemistry', 'math'];
  const subjectMeta = {
    physics:   { label: '⚡ Physics',     accent: 'var(--physics)',   cls: 'expert-physics',   expertTag: 'Dr. Arjun Mehta — Physics Resource Person' },
    chemistry: { label: '🧪 Chemistry',  accent: 'var(--chemistry)', cls: 'expert-chemistry', expertTag: 'Dr. Priya Nair — Chemistry Resource Person' },
    math:      { label: '📐 Mathematics', accent: 'var(--math)',      cls: 'expert-math',      expertTag: 'Dr. Rajan Sinha — Mathematics Resource Person' },
  };

  const tiers = { 1: { label: '🔴 Tier 1 — Must Master', cls: 'tier-1', cardCls: 'tier-1-card' },
                  2: { label: '🟡 Tier 2 — High Value',  cls: 'tier-2', cardCls: 'tier-2-card' },
                  3: { label: '🟢 Tier 3 — Score Booster', cls: 'tier-3', cardCls: 'tier-3-card' } };

  let html = '';
  const subjectsToShow = currentWeightageFilter === 'all' ? subjects : [currentWeightageFilter];

  subjectsToShow.forEach(subj => {
    const items = filtered.filter(c => c.subject === subj);
    if (!items.length) return;

    const meta = subjectMeta[subj];
    html += `<div class="wt-subject-block">
      <div class="wt-subject-header">
        <span class="wt-subject-label" style="color:${meta.accent}">${meta.label}</span>
        <span class="wt-expert-tag ${meta.cls}">${meta.expertTag}</span>
      </div>`;

    [1, 2, 3].forEach(tier => {
      const tierItems = items.filter(c => c.tier === tier);
      if (!tierItems.length) return;
      const t = tiers[tier];
      html += `<div class="wt-tier-label ${t.cls}">${t.label}</div>`;
      html += `<div class="wt-chapters-grid">`;
      tierItems.forEach((ch, idx) => {
        const cardId = `wt-${subj}-${ch.name.replace(/\s+/g,'-').replace(/[^a-zA-Z0-9-]/g,'')}-${idx}`;
        const subtopicsHtml = ch.subtopics.map(s => {
          const pCls = s.priority === 'Critical' ? 'priority-critical' : s.priority === 'Highest' ? 'priority-highest' : 'priority-high';
          return `<div class="wt-subtopic-row">
            <span>${s.name}</span>
            <span class="wt-subtopic-priority ${pCls}">${s.priority}</span>
          </div>`;
        }).join('');
        const resourcesHtml = ch.resources ? ch.resources.map(r => `<span class="wt-res-tag">${r}</span>`).join('') : '';
        html += `<div class="wt-chapter-card ${t.cardCls}" id="${cardId}" onclick="toggleWtCard('${cardId}')">
          <div class="wt-chapter-top">
            <span class="wt-chapter-name">${ch.name}</span>
            <div class="wt-chapter-meta">
              <span class="wt-weightage-pill">${ch.weightage}</span>
              <div class="wt-tier-dot"></div>
            </div>
          </div>
          <div class="wt-chapter-desc">${ch.desc}</div>
          <div class="wt-chapter-expand-hint">👆 Tap to see subtopics & resources</div>
          <div class="wt-subtopics">
            <div class="wt-subtopics-title">Subtopics</div>
            ${subtopicsHtml}
            ${resourcesHtml ? `<div class="wt-resources">${resourcesHtml}</div>` : ''}
          </div>
        </div>`;
      });
      html += `</div>`;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
}

function toggleWtCard(id) {
  const card = document.getElementById(id);
  if (card) card.classList.toggle('expanded');
}

function filterWeightage(subj) {
  currentWeightageFilter = subj;
  document.querySelectorAll('.wt-filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('wf-' + subj);
  if (btn) btn.classList.add('active');
  renderWeightage();
}

// ============ EXAM TARGETS & COUNTDOWN ============

const EXAM_TARGETS = {
  mains1: { name: 'JEE Mains 2027 (Session 1)', date: '2027-01-24T09:00:00' },
  mains2: { name: 'JEE Mains 2027 (Session 2)', date: '2027-04-04T09:00:00' },
  advanced: { name: 'JEE Advanced 2027', date: '2027-05-23T09:00:00' }
};

function getSelectedTargetKey() {
  return localStorage.getItem('jee_target_key') || 'mains1';
}

function getTargetDate() {
  const key = getSelectedTargetKey();
  if (key === 'custom') {
    const customStr = localStorage.getItem('jee_custom_target_date');
    if (customStr) return new Date(customStr + 'T09:00:00');
    return new Date('2027-01-24T09:00:00');
  }
  return new Date((EXAM_TARGETS[key] || EXAM_TARGETS.mains1).date);
}

function changeTargetExam(val) {
  localStorage.setItem('jee_target_key', val);
  const customPicker = document.getElementById('custom-date-picker');
  if (customPicker) {
    customPicker.style.display = (val === 'custom') ? 'inline-block' : 'none';
  }
  updateCountdown();
  updateStats();
}

function setCustomTargetDate(val) {
  if (val) {
    localStorage.setItem('jee_custom_target_date', val);
    updateCountdown();
    updateStats();
  }
}

function updateCountdown() {
  const targetDate = getTargetDate();
  const now = new Date();
  const diff = targetDate - now;

  const el = document.getElementById('days-left');
  if (el) {
    if (diff <= 0) {
      el.textContent = '🎯';
    } else {
      const days = Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
      el.textContent = days.toLocaleString();
    }
  }

  // Update target title display
  const key = getSelectedTargetKey();
  const nameEl = document.getElementById('smart-target-name');
  if (nameEl) {
    if (key === 'custom') {
      nameEl.textContent = 'Target: Custom (' + (localStorage.getItem('jee_custom_target_date') || 'Jan 24, 2027') + ')';
    } else {
      nameEl.textContent = 'Target: ' + (EXAM_TARGETS[key] ? EXAM_TARGETS[key].name : 'JEE Mains 2027');
    }
  }
}

// ============ STATS & ADAPTIVE PACE REDISTRIBUTOR ============

function updateStats() {
  const allTopics = [...PHYSICS, ...CHEMISTRY, ...MATH];
  const totalTopics = allTopics.length;
  const doneCount = allTopics.filter(t => completedTopics[t.id]).length;
  const remainingCount = totalTopics - doneCount;
  const pct = Math.round((doneCount / totalTopics) * 100);

  document.getElementById('topics-done').textContent = doneCount;
  document.getElementById('overall-pct').textContent = pct + '%';

  const bar = document.getElementById('global-bar');
  if (bar) bar.style.width = pct + '%';

  // Calculate Days Left for Pace
  const targetDate = getTargetDate();
  const now = new Date();
  const diffMs = targetDate - now;
  const daysLeft = Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

  // Pace calculations
  const dailyPace = remainingCount > 0 ? (remainingCount / daysLeft).toFixed(2) : '0';
  const weeklyPace = remainingCount > 0 ? ((remainingCount / daysLeft) * 7).toFixed(1) : '0';

  const dailyEl = document.getElementById('daily-required-pace');
  if (dailyEl) dailyEl.textContent = dailyPace;

  const weeklyEl = document.getElementById('weekly-required-pace');
  if (weeklyEl) weeklyEl.textContent = weeklyPace;

  const remEl = document.getElementById('remaining-topics-count');
  if (remEl) remEl.textContent = remainingCount;

  // Estimated Finish Date if student maintains daily pace
  const finishEl = document.getElementById('est-finish-date');
  if (finishEl) {
    if (remainingCount === 0) {
      finishEl.textContent = 'Completed! 🎉';
    } else {
      const finishDate = new Date();
      finishDate.setDate(finishDate.getDate() + Math.ceil(remainingCount / Math.max(0.1, parseFloat(dailyPace))));
      finishEl.textContent = finishDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
  }

  // Detect Missed Days & Update Pace Status Badge
  const lastActiveStr = localStorage.getItem('jee_last_active_date');
  const todayStr = new Date().toISOString().split('T')[0];
  let missedDays = 0;

  if (lastActiveStr) {
    const lastActiveDate = new Date(lastActiveStr);
    const timeDiff = new Date() - lastActiveDate;
    missedDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  }

  // Save active date
  localStorage.setItem('jee_last_active_date', todayStr);

  const badgeEl = document.getElementById('pace-status-badge');
  const msgEl = document.getElementById('smart-pace-message');

  if (badgeEl && msgEl) {
    if (remainingCount === 0) {
      badgeEl.className = 'pace-badge pace-on-track';
      badgeEl.textContent = '🏆 Syllabus Complete';
      msgEl.textContent = 'Incredible job! You have finished 100% of the JEE syllabus. Focus on mocks and revision!';
    } else if (missedDays > 1) {
      badgeEl.className = 'pace-badge pace-behind';
      badgeEl.textContent = '⚡ Pace Auto-Redistributed';
      msgEl.innerHTML = `<strong>Notice:</strong> You haven't checked off topics for ${missedDays} days. Your remaining ${remainingCount} chapters have been auto-redistributed across your ${daysLeft} remaining days. New daily target: <strong>${dailyPace} chapters/day</strong> (~${weeklyPace}/week).`;
    } else if (parseFloat(dailyPace) <= 0.4) {
      badgeEl.className = 'pace-badge pace-on-track';
      badgeEl.textContent = '🟢 On Track';
      msgEl.textContent = `You are on a comfortable pace! Covering ~${weeklyPace} chapters per week will finish your entire syllabus before your target exam date.`;
    } else if (parseFloat(dailyPace) <= 0.7) {
      badgeEl.className = 'pace-badge pace-moderate';
      badgeEl.textContent = '🟡 Moderate Pace';
      msgEl.textContent = `Target set: You need ${dailyPace} chapters/day (${weeklyPace} per week). Stay consistent with your daily study planner to maintain 99 percentile momentum!`;
    } else {
      badgeEl.className = 'pace-badge pace-behind';
      badgeEl.textContent = '🔴 High Speed Required';
      msgEl.textContent = `Heads up! To complete the remaining ${remainingCount} chapters on time, your target is ${dailyPace} chapters/day (${weeklyPace}/week). Focus on high-weightage topics first!`;
    }
  }
}

// ============ INIT ============

function init() {
  // Sync selected target dropdown UI
  const savedTargetKey = getSelectedTargetKey();
  const selectEl = document.getElementById('exam-target-select');
  if (selectEl) selectEl.value = savedTargetKey;

  if (savedTargetKey === 'custom') {
    const customPicker = document.getElementById('custom-date-picker');
    if (customPicker) {
      customPicker.style.display = 'inline-block';
      customPicker.value = localStorage.getItem('jee_custom_target_date') || '';
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 60000);

  renderSubject(PHYSICS, 'physics-content', 'physics');
  renderSubject(CHEMISTRY, 'chemistry-content', 'chemistry');
  renderSubject(MATH, 'math-content', 'math');
  renderMilestones();
  renderWeightage();
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
