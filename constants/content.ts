
import type { Manual } from '../types';
import { 
    HomeIcon, 
    ShieldCheckIcon,
    SprayBottleIcon,
    ListBulletIcon,
    PaletteIcon,
    MapPinIcon,
    TrashIcon,
    ClipboardDocumentCheckIcon,
    ExclamationTriangleIcon,
    PhoneIcon,
    QuestionMarkCircleIcon 
} from '../components/icons/Icons';

const manualData: { it: Manual, en: Manual, hi: Manual } = {
  it: {
    appTitle: "Manuale Operativo: Pulizie e Sanificazione",
    tocTitle: "Indice dei Capitoli",
    chapters: [
      {
        id: 'intro',
        title: '1. Introduzione',
        icon: HomeIcon,
        content: [
          { type: 'paragraph', text: "Questo manuale operativo è lo strumento di riferimento per tutti gli operatori della squadra pulizie di Ca' Scapin. Contiene le procedure, i protocolli e le best practice per garantire il massimo livello di igiene e sicurezza alimentare." },
          { type: 'paragraph', text: "Scopo del Documento: Il presente manuale ha lo scopo di fornire procedure chiare e dettagliate per ogni area e attrezzatura, garantire il rispetto delle normative HACCP e della sicurezza alimentare, standardizzare le operazioni di pulizia e sanificazione, e servire come base per la formazione del personale." }
        ]
      },
      {
        id: 'haccp',
        title: '2. Principi Generali HACCP',
        icon: ShieldCheckIcon,
        content: [
          { type: 'paragraph', text: "HACCP sta per Hazard Analysis and Critical Control Points (Analisi dei Rischi e Punti Critici di Controllo). È un sistema di autocontrollo obbligatorio per tutte le attività che manipolano alimenti." },
          { type: 'paragraph', text: "Obiettivi dell'HACCP:" },
          { type: 'list', items: [
              "Identificare i rischi per la sicurezza alimentare",
              "Individuare i punti critici di controllo",
              "Stabilire procedure di monitoraggio",
              "Prevenire le contaminazioni"
          ]},
          { type: 'paragraph', text: "Tipi di Rischio:"},
          { type: 'list', items: [
            "Rischio Biologico: Causato da microrganismi patogeni: batteri (es. Salmonella, Listeria, E. coli), virus, funghi, muffe.",
            "Rischio Chimico: Causato da sostanze chimiche: residui di detergenti, disinfettanti, pesticidi, additivi non autorizzati.",
            "Rischio Fisico: Causato da corpi estranei: vetri, plastica, metallo, capelli, insetti, oggetti vari."
          ]},
          { type: 'paragraph', text: "Contaminazioni Incrociate: Le contaminazioni incrociate si verificano quando microrganismi patogeni vengono trasferiti da una superficie contaminata a una pulita, o da un alimento crudo a uno cotto. Come prevenirle:" },
           { type: 'list', items: [
              "Applicare il principio della marcia in avanti (dal pulito al sporco)",
              "Separare fisicamente le aree di lavoro",
              "Usare attrezzature e panni dedicati per area (codice colore)",
              "Lavarsi sempre le mani tra un'attività e l'altra"
          ]}
        ]
      },
      {
        id: 'sanitization',
        title: '3. Pulizia, Sanificazione, Disinfezione',
        icon: SprayBottleIcon,
        content: [
          { type: 'paragraph', text: "Pulizia (Detersione): Rimozione dello sporco visibile da superfici, oggetti e ambienti. Elimina polvere, residui di cibo, grasso e riduce la carica batterica del 90%. La pulizia è il primo step obbligatorio prima di ogni altra operazione!" },
          { type: 'paragraph', text: "Come verificare se una superficie è pulita:" },
          { type: 'list', items: [
            "Non è unta al tatto.",
            "Non emana cattivi odori.",
            "Test del panno bianco: passare un panno bianco sulla superficie - non deve colorarsi.",
            "Test dell'acqua: versare acqua - deve scorrere uniformemente senza formare gocce."
          ]},
          { type: 'paragraph', text: "Sanificazione: Insieme di operazioni di pulizia + disinfezione per rendere sano un ambiente." },
          { type: 'paragraph', text: "Disinfezione: Distruzione o inattivazione dei microrganismi patogeni mediante prodotti disinfettanti. ATTENZIONE: La disinfezione deve sempre essere preceduta dalla pulizia!" }
        ]
      },
      {
        id: 'phases',
        title: '4. Fasi del Processo di Sanificazione',
        icon: ListBulletIcon,
        content: [
           { type: 'paragraph', text: "Il processo si articola in 3 fasi da eseguire nell'ordine corretto:" },
           { type: 'paragraph', text: "FASE 1: PULIZIA/DETERSIONE" },
           { type: 'list', items: [
               "Rimuovere i residui grossolani manualmente.",
               "Pre-risciacquo con acqua tiepida.",
               "Applicare il detergente specifico.",
               "Frizionare energicamente con spugna o panno.",
               "Lasciare agire secondo le istruzioni del prodotto."
           ]},
           { type: 'paragraph', text: "FASE 2: RISCIACQUO" },
           { type: 'list', items: [
               "Risciacquare per rimuovere tutti i residui di detergente.",
               "Verificare l'assenza di schiuma.",
               "Eliminare lo sporco emulsionato.",
               "Perché è importante: I residui di detergente possono contaminare gli alimenti!"
           ]},
           { type: 'paragraph', text: "FASE 3: DISINFEZIONE" },
           { type: 'list', items: [
               "Applicare il disinfettante sulla superficie pulita.",
               "Lasciare agire completamente.",
               "Lasciare asciugare naturalmente quando possibile.",
               "IMPORTANTE: Alternare ogni 6 mesi il tipo di disinfettante per evitare resistenze batteriche."
           ]}
        ]
      },
      {
        id: 'colorcode',
        title: '5. Codice Colore e Attrezzature',
        icon: PaletteIcon,
        content: [
          { type: 'paragraph', text: "Per prevenire le contaminazioni incrociate, è obbligatorio utilizzare panni e attrezzature dedicati per ogni area, identificati da colori specifici. NON usare MAI panni di un colore per aree diverse! Rischio contaminazione!" },
          {
            type: 'table',
            data: {
              headers: ['COLORE', 'UTILIZZO'],
              rows: [
                ['ROSSO', 'Sanitari (WC, bidets, orinatoi)'],
                ['GIALLO', 'Superfici a contatto alimentare (tavoli cucina, piani di lavoro)'],
                ['VERDE', 'Aree generali (uffici, sale, zone comuni)'],
                ['BLU', 'Pavimenti e superfici basse'],
                ['BIANCO', 'Vetri, specchi, superfici trasparenti'],
              ]
            }
          }
        ]
      },
      {
        id: 'procedures',
        title: '6. Procedure Specifiche per Area',
        icon: MapPinIcon,
        content: [
            { type: 'paragraph', text: "6.1 CUCINA PROFESSIONALE: Superfici e Piani di Lavoro (Panno GIALLO, dopo ogni utilizzo), Fornelli e Piano Cottura (quotidiana), Brasiera (dopo ogni utilizzo), Friggitrice (2 volte/settimana), Celle Frigorifere (2 volte/settimana), Cappa Cucina (settimanale/mensile), Griglia (dopo ogni utilizzo), Scarichi (1 volta/settimana), Pavimenti (Panno BLU, tutti i giorni)." },
            { type: 'paragraph', text: "6.2 ZONA VERDURA: Tavoli, lavello, lava verdure, pavimenti (Panno GIALLO/BLU, dopo ogni utilizzo + giornaliera)." },
            { type: 'paragraph', text: "6.3 ZONA PASTICCERIA: Quando si usa (Panno GIALLO)." },
            { type: 'paragraph', text: "6.4 ZONA STOCCAGGIO PENTOLE E CASSE BIANCHE: 1 volta/settimana." },
            { type: 'paragraph', text: "6.5 ATTREZZATURE SPECIALI CUCINA (Macchina Pasta): Ogni volta che si usa." },
            { type: 'paragraph', text: "6.6 MAGAZZINO ALIMENTARE: 1 volta/settimana." },
            { type: 'paragraph', text: "6.6 ZONA OFFICE (Cucina Principale): Fine giornata (Panno VERDE/BLU)." },
            { type: 'paragraph', text: "6.7 ZONA MENSA: Dopo ogni utilizzo (Panno VERDE/BLU)." },
            { type: 'paragraph', text: "6.8 SALONE DELLE FESTE: Dopo ogni evento (Panno VERDE/BLU)." },
            { type: 'paragraph', text: "6.9 SALA DELLE COLONNE E SALA CHALET: Secondo programma eventi (Panno VERDE/BLU)." },
            { type: 'paragraph', text: "6.10 ZONA INGRESSO: Giornaliera + dopo eventi (Panno VERDE/BIANCO/BLU)." },
            { type: 'paragraph', text: "6.11 AREA ESTERNA: Dopo ogni evento." },
            { type: 'paragraph', text: "6.12 BAGNI: 1 volta al giorno + quando necessario (Panno ROSSO)." },
            { type: 'paragraph', text: "6.13 UFFICI (Commerciale e Amministrazione): Settimanale e al bisogno." },
            { type: 'paragraph', text: "6.14 SCALE (Salone Feste): Settimanale." },
        ]
      },
      {
        id: 'waste',
        title: '7. Gestione Rifiuti',
        icon: TrashIcon,
        content: [
            { type: 'paragraph', text: "Una corretta gestione dei rifiuti è essenziale per l'igiene e il rispetto dell'ambiente." },
            {
                type: 'table',
                data: {
                    headers: ['BIDONE', 'RIFIUTO'],
                    rows: [
                        ['MARRONE', 'Umido (scarti alimentari, organico)'],
                        ['GIALLO', 'Carta e cartone'],
                        ['VERDE', 'Vetro'],
                        ['AZZURRO', 'Plastica e lattine'],
                        ['NERO', 'Secco indifferenziato'],
                    ]
                }
            },
            { type: 'paragraph', text: "Regole Importanti:" },
            { type: 'list', items: [
                "I cartoni vanno APPIATTITI prima dello smaltimento.",
                "Cassette di legno e plastica vanno impilate per tipo sul bancale.",
                "Nell'incertezza o se rifiuto misto smaltire nel secco."
            ]}
        ]
      },
      {
        id: 'checklists',
        title: '8. Checklist per Zona',
        icon: ClipboardDocumentCheckIcon,
        content: [
            { type: 'paragraph', text: "Utilizzare queste checklist per assicurarsi che tutte le operazioni siano state completate correttamente." },
            { type: 'paragraph', text: "CUCINA PROFESSIONALE:" },
            { type: 'list', items: [
                "Giornaliera: Superfici, fornelli, brasiera, griglia, pavimenti, zona verdura, pasticceria.",
                "Bisettimanale: Celle frigorifere, friggitrice, porte celle.",
                "Settimanale: Scarichi, cappa (esterna), stoccaggio pentole, bidoni acciaio.",
                "Mensile: Cappa cucina (pulizia profonda con filtri)."
            ]},
            { type: 'paragraph', text: "ZONE OFFICE E MENSA (Giornaliera):" },
            { type: 'list', items: [
                "Office cucina principale, macchina caffè, superfici e tavoli, pavimenti, zona mensa."
            ]},
            { type: 'paragraph', text: "SALE E AREE COMUNI:" },
             { type: 'list', items: [
                "Giornaliera: Zona ingresso, specchi, divanetti, posacenere, sala colonne.",
                "Post-Evento: Salone delle feste, cucina salone, office salone, pavimenti, area esterna.",
                "Mensile: Mattonelle salone feste, vetri esterni."
            ]},
             { type: 'paragraph', text: "BAGNI (Giornaliera, min 2 volte):" },
            { type: 'list', items: [
                "Sanitari completi, rifornimento carta, specchi, pavimenti, bagno ufficio amministrazione."
            ]},
        ]
      },
      {
        id: 'safety',
        title: '9. Norme di Sicurezza',
        icon: ExclamationTriangleIcon,
        content: [
            { type: 'paragraph', text: "Durante l'Uso dei Prodotti: MAI mescolare prodotti diversi!" },
            { type: 'list', items: [
                "Leggere sempre l'etichetta prima dell'uso.",
                "Rispettare le diluizioni indicate.",
                "Usare sempre i DPI (guanti, occhiali se necessario).",
                "Ventilare gli ambienti durante e dopo l'uso.",
                "Chiudere i contenitori dopo l'uso."
            ]},
            { type: 'paragraph', text: "Igiene Personale dell'Operatore:" },
            { type: 'list', items: [
                "Lavaggio mani frequente e accurato.",
                "Unghie corte e pulite.",
                "Capelli raccolti e divisa pulita.",
                "Scarpe antiscivolo chiuse.",
                "Non fumare o mangiare durante le pulizie."
            ]},
            { type: 'paragraph', text: "COMPORTAMENTI VIETATI:" },
            { type: 'list', items: [
                "Non usare gli stessi panni per aree diverse.",
                "Non lasciare prodotti aperti o incustoditi.",
                "Non diluire i prodotti 'ad occhio'.",
                "Non usare prodotti scaduti.",
                "Non mescolare detergenti e disinfettanti.",
                "Non saltare la fase di risciacquo."
            ]}
        ]
      },
      {
        id: 'contacts',
        title: '10. Riferimenti e Contatti',
        icon: PhoneIcon,
        content: [
          { type: 'paragraph', text: "Normative di Riferimento:" },
          { type: 'list', items: [
            "Regolamento CE 852/2004 - Igiene dei prodotti alimentari",
            "Regolamento CE 178/2002 - Sicurezza alimentare",
            "DM 274/1997 - Pulizia e sanificazione",
            "D.Lgs 193/2007 - Recepimento norme europee"
          ]},
          { type: 'paragraph', text: "Contatti Emergenza:" },
          { type: 'list', items: [
            "Responsabile Pulizie: ____________",
            "Centro Antiveleni: ____________",
            "Numero Emergenze: 112",
            "Fornitore Prodotti: ____________"
          ]},
           { type: 'paragraph', text: "'La pulizia e la sanificazione non sono un costo, ma un investimento per la salute dei clienti e la reputazione dell'attività'" }
        ]
      },
      {
        id: 'bot',
        title: 'Assistente AI',
        icon: QuestionMarkCircleIcon,
        content: [
            { type: 'bot' }
        ]
      }
    ],
    bot: {
        title: "Assistente Virtuale del Manuale",
        placeholder: "Fai una domanda sul manuale...",
        button: "Invia",
        initialMessage: "Ciao! Sono il tuo assistente AI. Chiedimi qualsiasi cosa riguardo le procedure di pulizia e sanificazione descritte in questo manuale."
    }
  },
  en: {
    appTitle: "Operations Manual: Cleaning & Sanitization",
    tocTitle: "Table of Contents",
    chapters: [
      {
        id: 'intro',
        title: '1. Introduction',
        icon: HomeIcon,
        content: [
          { type: 'paragraph', text: "This operational manual is the reference tool for all operators of the Ca' Scapin cleaning team. It contains the procedures, protocols, and best practices to ensure the highest level of hygiene and food safety." },
          { type: 'paragraph', text: "Purpose of the Document: This manual aims to provide clear and detailed procedures for each area and piece of equipment, ensure compliance with HACCP and food safety regulations, standardize cleaning and sanitization operations, and serve as a basis for staff training." }
        ]
      },
      {
        id: 'haccp',
        title: '2. General HACCP Principles',
        icon: ShieldCheckIcon,
        content: [
          { type: 'paragraph', text: "HACCP stands for Hazard Analysis and Critical Control Points. It is a mandatory self-control system for all activities that handle food." },
          { type: 'paragraph', text: "HACCP Objectives:" },
          { type: 'list', items: [
              "Identify food safety risks",
              "Identify critical control points",
              "Establish monitoring procedures",
              "Prevent contamination"
          ]},
          { type: 'paragraph', text: "Types of Hazards:"},
          { type: 'list', items: [
            "Biological Hazard: Caused by pathogenic microorganisms: bacteria (e.g., Salmonella, Listeria, E. coli), viruses, fungi, molds.",
            "Chemical Hazard: Caused by chemical substances: residues of detergents, disinfectants, pesticides, unauthorized additives.",
            "Physical Hazard: Caused by foreign bodies: glass, plastic, metal, hair, insects, various objects."
          ]},
          { type: 'paragraph', text: "Cross-Contamination: Cross-contamination occurs when pathogenic microorganisms are transferred from a contaminated surface to a clean one, or from a raw food to a cooked one. How to prevent it:" },
           { type: 'list', items: [
              "Apply the principle of forward motion (from clean to dirty)",
              "Physically separate work areas",
              "Use dedicated equipment and cloths for each area (color code)",
              "Always wash hands between one activity and another"
          ]}
        ]
      },
      {
        id: 'sanitization',
        title: '3. Cleaning, Sanitization, Disinfection',
        icon: SprayBottleIcon,
        content: [
          { type: 'paragraph', text: "Cleaning (Detergency): Removal of visible dirt from surfaces, objects, and environments. It removes dust, food residues, grease, and reduces the bacterial load by 90%. Cleaning is the mandatory first step before any other operation!" },
          { type: 'paragraph', text: "How to verify if a surface is clean:" },
          { type: 'list', items: [
            "It is not greasy to the touch.",
            "It does not emit bad odors.",
            "White cloth test: wipe a white cloth on the surface - it should not become colored.",
            "Water test: pour water - it should flow uniformly without forming droplets."
          ]},
          { type: 'paragraph', text: "Sanitization: A set of cleaning + disinfection operations to make an environment healthy." },
          { type: 'paragraph', text: "Disinfection: Destruction or inactivation of pathogenic microorganisms using disinfectant products. WARNING: Disinfection must always be preceded by cleaning!" }
        ]
      },
      {
        id: 'phases',
        title: '4. Phases of the Sanitization Process',
        icon: ListBulletIcon,
        content: [
           { type: 'paragraph', text: "The process is divided into 3 phases to be performed in the correct order:" },
           { type: 'paragraph', text: "PHASE 1: CLEANING/DETERGENCY" },
           { type: 'list', items: [
               "Manually remove coarse residues.",
               "Pre-rinse with lukewarm water.",
               "Apply the specific detergent.",
               "Scrub vigorously with a sponge or cloth.",
               "Let it act according to the product instructions."
           ]},
           { type: 'paragraph', text: "PHASE 2: RINSING" },
           { type: 'list', items: [
               "Rinse to remove all detergent residues.",
               "Check for the absence of foam.",
               "Eliminate emulsified dirt.",
               "Why it's important: Detergent residues can contaminate food!"
           ]},
           { type: 'paragraph', text: "PHASE 3: DISINFECTION" },
           { type: 'list', items: [
               "Apply the disinfectant on the clean surface.",
               "Let it act completely.",
               "Let it dry naturally when possible.",
               "IMPORTANT: Alternate the type of disinfectant every 6 months to avoid bacterial resistance."
           ]}
        ]
      },
      {
        id: 'colorcode',
        title: '5. Color Code and Equipment',
        icon: PaletteIcon,
        content: [
          { type: 'paragraph', text: "To prevent cross-contamination, it is mandatory to use dedicated cloths and equipment for each area, identified by specific colors. NEVER use a cloth of one color for different areas! Risk of contamination!" },
          {
            type: 'table',
            data: {
              headers: ['COLOR', 'USAGE'],
              rows: [
                ['RED', 'Sanitary facilities (toilets, bidets, urinals)'],
                ['YELLOW', 'Food contact surfaces (kitchen tables, worktops)'],
                ['GREEN', 'General areas (offices, halls, common areas)'],
                ['BLUE', 'Floors and low surfaces'],
                ['WHITE', 'Glass, mirrors, transparent surfaces'],
              ]
            }
          }
        ]
      },
      {
        id: 'procedures',
        title: '6. Specific Procedures by Area',
        icon: MapPinIcon,
        content: [
            { type: 'paragraph', text: "6.1 PROFESSIONAL KITCHEN: Surfaces & Worktops (YELLOW cloth, after each use), Stoves & Cooktops (daily), Bratt Pan (after each use), Fryer (2 times/week), Cold Rooms (2 times/week), Kitchen Hood (weekly/monthly), Grill (after each use), Drains (1 time/week), Floors (BLUE cloth, every day)." },
            { type: 'paragraph', text: "6.2 VEGETABLE AREA: Tables, sink, vegetable washer, floors (YELLOW/BLUE cloth, after each use + daily)." },
            { type: 'paragraph', text: "6.3 PASTRY AREA: When in use (YELLOW cloth)." },
            { type: 'paragraph', text: "6.4 POTS AND WHITE CRATES STORAGE AREA: 1 time/week." },
            { type: 'paragraph', text: "6.5 SPECIAL KITCHEN EQUIPMENT (Pasta Machine): Every time it is used." },
            { type: 'paragraph', text: "6.6 FOOD WAREHOUSE: 1 time/week." },
            { type: 'paragraph', text: "6.6 OFFICE AREA (Main Kitchen): End of day (GREEN/BLUE cloth)." },
            { type: 'paragraph', text: "6.7 CANTEEN AREA: After each use (GREEN/BLUE cloth)." },
            { type: 'paragraph', text: "6.8 PARTY HALL: After each event (GREEN/BLUE cloth)." },
            { type: 'paragraph', text: "6.9 COLUMN ROOM & CHALET ROOM: According to event schedule (GREEN/BLUE cloth)." },
            { type: 'paragraph', text: "6.10 ENTRANCE AREA: Daily + after events (GREEN/WHITE/BLUE cloth)." },
            { type: 'paragraph', text: "6.11 OUTDOOR AREA: After each event." },
            { type: 'paragraph', text: "6.12 BATHROOMS: Once a day + when necessary (RED cloth)." },
            { type: 'paragraph', text: "6.13 OFFICES (Commercial & Administration): Weekly and as needed." },
            { type: 'paragraph', text: "6.14 STAIRS (Party Hall Side): Weekly." },
        ]
      },
       {
        id: 'waste',
        title: '7. Waste Management',
        icon: TrashIcon,
        content: [
            { type: 'paragraph', text: "Proper waste management is essential for hygiene and respect for the environment." },
            {
                type: 'table',
                data: {
                    headers: ['BIN', 'WASTE'],
                    rows: [
                        ['BROWN', 'Organic (food scraps)'],
                        ['YELLOW', 'Paper and cardboard'],
                        ['GREEN', 'Glass'],
                        ['BLUE', 'Plastic and cans'],
                        ['BLACK', 'Non-recyclable waste'],
                    ]
                }
            },
            { type: 'paragraph', text: "Important Rules:" },
            { type: 'list', items: [
                "Cardboard boxes must be FLATTENED before disposal.",
                "Wooden and plastic crates must be stacked by type on the pallet.",
                "If in doubt or if waste is mixed, dispose of it in the non-recyclable bin."
            ]}
        ]
      },
      {
        id: 'checklists',
        title: '8. Checklists by Zone',
        icon: ClipboardDocumentCheckIcon,
        content: [
            { type: 'paragraph', text: "Use these checklists to ensure all operations have been completed correctly." },
            { type: 'paragraph', text: "PROFESSIONAL KITCHEN:" },
            { type: 'list', items: [
                "Daily: Surfaces, stoves, bratt pan, grill, floors, vegetable area, pastry area.",
                "Bi-weekly: Cold rooms, fryer, cell doors.",
                "Weekly: Drains, hood (external), pot storage, steel bins.",
                "Monthly: Kitchen hood (deep cleaning with filters)."
            ]},
            { type: 'paragraph', text: "OFFICE AND CANTEEN ZONES (Daily):" },
            { type: 'list', items: [
                "Main kitchen office, coffee machine, surfaces and tables, floors, canteen area."
            ]},
            { type: 'paragraph', text: "HALLS AND COMMON AREAS:" },
             { type: 'list', items: [
                "Daily: Entrance area, mirrors, sofas, ashtrays, column room.",
                "Post-Event: Party hall, hall kitchen, hall office, floors, outdoor area.",
                "Monthly: Party hall tiles, external windows."
            ]},
             { type: 'paragraph', text: "BATHROOMS (Daily, min 2 times):" },
            { type: 'list', items: [
                "Complete sanitary fixtures, replenish paper, mirrors, floors, administration office bathroom."
            ]},
        ]
      },
      {
        id: 'safety',
        title: '9. Safety Regulations',
        icon: ExclamationTriangleIcon,
        content: [
            { type: 'paragraph', text: "During Product Use: NEVER mix different products!" },
            { type: 'list', items: [
                "Always read the label before use.",
                "Respect the indicated dilutions.",
                "Always use PPE (gloves, goggles if necessary).",
                "Ventilate rooms during and after use.",
                "Close containers after use."
            ]},
            { type: 'paragraph', text: "Operator's Personal Hygiene:" },
            { type: 'list', items: [
                "Frequent and thorough hand washing.",
                "Short and clean nails.",
                "Hair tied back and clean uniform.",
                "Closed-toe non-slip shoes.",
                "Do not smoke or eat during cleaning."
            ]},
            { type: 'paragraph', text: "PROHIBITED BEHAVIORS:" },
            { type: 'list', items: [
                "Do not use the same cloths for different areas.",
                "Do not leave products open or unattended.",
                "Do not dilute products 'by eye'.",
                "Do not use expired products.",
                "Do not mix detergents and disinfectants.",
                "Do not skip the rinsing phase."
            ]}
        ]
      },
      {
        id: 'contacts',
        title: '10. References and Contacts',
        icon: PhoneIcon,
        content: [
          { type: 'paragraph', text: "Reference Regulations:" },
          { type: 'list', items: [
            "EC Regulation 852/2004 - Hygiene of foodstuffs",
            "EC Regulation 178/2002 - Food safety",
            "DM 274/1997 - Cleaning and sanitization",
            "Legislative Decree 193/2007 - Transposition of European standards"
          ]},
          { type: 'paragraph', text: "Emergency Contacts:" },
          { type: 'list', items: [
            "Cleaning Manager: ____________",
            "Poison Control Center: ____________",
            "Emergency Number: 112",
            "Product Supplier: ____________"
          ]},
          { type: 'paragraph', text: "'Cleaning and sanitization are not a cost, but an investment in the health of customers and the reputation of the business'" }
        ]
      },
      {
        id: 'bot',
        title: 'AI Assistant',
        icon: QuestionMarkCircleIcon,
        content: [
            { type: 'bot' }
        ]
      }
    ],
    bot: {
        title: "Manual's Virtual Assistant",
        placeholder: "Ask a question about the manual...",
        button: "Send",
        initialMessage: "Hello! I am your AI assistant. Ask me anything about the cleaning and sanitization procedures described in this manual."
    }
  },
  hi: {
    appTitle: "संचालन मैनुअल: सफाई और स्वच्छता",
    tocTitle: "विषय-सूची",
    chapters: [
      {
        id: 'intro',
        title: '१. परिचय',
        icon: HomeIcon,
        content: [
          { type: 'paragraph', text: "यह संचालन मैनुअल Ca' Scapin सफाई टीम के सभी ऑपरेटरों के लिए संदर्भ उपकरण है। इसमें स्वच्छता और खाद्य सुरक्षा के उच्चतम स्तर को सुनिश्चित करने के लिए प्रक्रियाएं, प्रोटोकॉल और सर्वोत्तम अभ्यास शामिल हैं।" },
          { type: 'paragraph', text: "दस्तावेज़ का उद्देश्य: इस मैनुअल का उद्देश्य प्रत्येक क्षेत्र और उपकरण के लिए स्पष्ट और विस्तृत प्रक्रियाएं प्रदान करना, एचएसीसीपी और खाद्य सुरक्षा नियमों का अनुपालन सुनिश्चित करना, सफाई और स्वच्छता कार्यों को मानकीकृत करना और कर्मचारियों के प्रशिक्षण के लिए एक आधार के रूप में काम करना है।" }
        ]
      },
      {
        id: 'haccp',
        title: '२. सामान्य एचएसीसीपी सिद्धांत',
        icon: ShieldCheckIcon,
        content: [
          { type: 'paragraph', text: "एचएसीसीपी का मतलब हैज़र्ड एनालिसिस एंड क्रिटिकल कंट्रोल पॉइंट्स (खतरों का विश्लेषण और महत्वपूर्ण नियंत्रण बिंदु) है। यह भोजन को संभालने वाली सभी गतिविधियों के लिए एक अनिवार्य आत्म-नियंत्रण प्रणाली है।" },
          { type: 'paragraph', text: "एचएसीसीपी के उद्देश्य:" },
          { type: 'list', items: [
              "खाद्य सुरक्षा जोखिमों को पहचानें",
              "महत्वपूर्ण नियंत्रण बिंदुओं को पहचानें",
              "निगरानी प्रक्रियाएं स्थापित करें",
              "संदूषण को रोकें"
          ]},
          { type: 'paragraph', text: "खतरों के प्रकार:"},
          { type: 'list', items: [
            "जैविक खतरा: रोगजनक सूक्ष्मजीवों के कारण: बैक्टीरिया (जैसे, साल्मोनेला, लिस्टेरिया, ई. कोलाई), वायरस, कवक, मोल्ड।",
            "रासायनिक खतरा: रासायनिक पदार्थों के कारण: डिटर्जेंट, कीटाणुनाशक, कीटनाशकों, अनधिकृत योजकों के अवशेष।",
            "भौतिक खतरा: विदेशी निकायों के कारण: कांच, प्लास्टिक, धातु, बाल, कीड़े, विभिन्न वस्तुएं।"
          ]},
          { type: 'paragraph', text: "क्रॉस-संदूषण: क्रॉस-संदूषण तब होता है जब रोगजनक सूक्ष्मजीव एक दूषित सतह से एक साफ सतह पर, या एक कच्चे भोजन से एक पके हुए भोजन में स्थानांतरित हो जाते हैं। इसे कैसे रोकें:" },
           { type: 'list', items: [
              "आगे की गति के सिद्धांत को लागू करें (साफ से गंदे की ओर)",
              "कार्य क्षेत्रों को भौतिक रूप से अलग करें",
              "प्रत्येक क्षेत्र के लिए समर्पित उपकरण और कपड़े का उपयोग करें (रंग कोड)",
              "एक गतिविधि से दूसरी गतिविधि के बीच हमेशा हाथ धोएं"
          ]}
        ]
      },
      {
        id: 'sanitization',
        title: '३. सफाई, स्वच्छता, कीटाणुशोधन',
        icon: SprayBottleIcon,
        content: [
          { type: 'paragraph', text: "सफाई (डिटर्जेंसी): सतहों, वस्तुओं और वातावरण से दिखाई देने वाली गंदगी को हटाना। यह धूल, भोजन के अवशेष, ग्रीस को हटाता है, और बैक्टीरिया के भार को 90% तक कम करता है। किसी भी अन्य ऑपरेशन से पहले सफाई अनिवार्य पहला कदम है!" },
          { type: 'paragraph', text: "यह कैसे सत्यापित करें कि कोई सतह साफ है:" },
          { type: 'list', items: [
            "यह स्पर्श करने के लिए चिकना नहीं है।",
            "इससे कोई दुर्गंध नहीं आती है।",
            "सफेद कपड़ा परीक्षण: सतह पर एक सफेद कपड़ा पोंछें - यह रंगीन नहीं होना चाहिए।",
            "पानी का परीक्षण: पानी डालें - इसे बिना बूंदें बनाए समान रूप से बहना चाहिए।"
          ]},
          { type: 'paragraph', text: "स्वच्छता: एक वातावरण को स्वस्थ बनाने के लिए सफाई + कीटाणुशोधन कार्यों का एक सेट।" },
          { type: 'paragraph', text: "कीटाणुशोधन: कीटाणुनाशक उत्पादों का उपयोग करके रोगजनक सूक्ष्मजीवों का विनाश या निष्क्रियता। चेतावनी: कीटाणुशोधन से पहले हमेशा सफाई होनी चाहिए!" }
        ]
      },
      {
        id: 'phases',
        title: '४. स्वच्छता प्रक्रिया के चरण',
        icon: ListBulletIcon,
        content: [
           { type: 'paragraph', text: "प्रक्रिया को 3 चरणों में विभाजित किया गया है जिन्हें सही क्रम में किया जाना है:" },
           { type: 'paragraph', text: "चरण 1: सफाई/डिटर्जेंसी" },
           { type: 'list', items: [
               "मोटे अवशेषों को मैन्युअल रूप से हटाएं।",
               "गुनगुने पानी से पहले से धो लें।",
               "विशिष्ट डिटर्जेंट लागू करें।",
               "एक स्पंज या कपड़े से जोर से रगड़ें।",
               "उत्पाद के निर्देशों के अनुसार इसे काम करने दें।"
           ]},
           { type: 'paragraph', text: "चरण 2: धोना" },
           { type: 'list', items: [
               "सभी डिटर्जेंट अवशेषों को हटाने के लिए धो लें।",
               "फोम की अनुपस्थिति की जांच करें।",
               "पायसीकृत गंदगी को खत्म करें।",
               "यह महत्वपूर्ण क्यों है: डिटर्जेंट के अवशेष भोजन को दूषित कर सकते हैं!"
           ]},
           { type: 'paragraph', text: "चरण 3: कीटाणुशोधन" },
           { type: 'list', items: [
               "साफ सतह पर कीटाणुनाशक लागू करें।",
               "इसे पूरी तरह से काम करने दें।",
               "संभव होने पर इसे स्वाभाविक रूप से सूखने दें।",
               "महत्वपूर्ण: जीवाणु प्रतिरोध से बचने के लिए हर 6 महीने में कीटाणुनाशक के प्रकार को बदलें।"
           ]}
        ]
      },
      {
        id: 'colorcode',
        title: '५. कलर कोड और उपकरण',
        icon: PaletteIcon,
        content: [
          { type: 'paragraph', text: "क्रॉस-संदूषण को रोकने के लिए, प्रत्येक क्षेत्र के लिए समर्पित कपड़े और उपकरण का उपयोग करना अनिवार्य है, जिन्हें विशिष्ट रंगों से पहचाना जाता है। विभिन्न क्षेत्रों के लिए कभी भी एक रंग के कपड़े का उपयोग न करें! संदूषण का खतरा!" },
          {
            type: 'table',
            data: {
              headers: ['रंग', 'उपयोग'],
              rows: [
                ['लाल', 'सेनेटरी सुविधाएं (शौचालय, बिडेट, यूरिनल)'],
                ['पीला', 'खाद्य संपर्क सतहें (रसोई की मेजें, वर्कटॉप)'],
                ['हरा', 'सामान्य क्षेत्र (कार्यालय, हॉल, सामान्य क्षेत्र)'],
                ['नीला', 'फर्श और निचली सतहें'],
                ['सफ़ेद', 'कांच, दर्पण, पारदर्शी सतहें'],
              ]
            }
          }
        ]
      },
      {
        id: 'procedures',
        title: '६. क्षेत्र के अनुसार विशिष्ट प्रक्रियाएं',
        icon: MapPinIcon,
        content: [
            { type: 'paragraph', text: "६.१ पेशेवर रसोई: सतहें और वर्कटॉप (पीला कपड़ा, प्रत्येक उपयोग के बाद), स्टोव और कुकटॉप (दैनिक), ब्रैट पैन (प्रत्येक उपयोग के बाद), फ्रायर (सप्ताह में 2 बार), कोल्ड रूम (सप्ताह में 2 बार), किचन हुड (साप्ताहिक/मासिक), ग्रिल (प्रत्येक उपयोग के बाद), नालियां (सप्ताह में 1 बार), फर्श (नीला कपड़ा, हर दिन)।" },
            { type: 'paragraph', text: "६.२ सब्जी क्षेत्र: मेजें, सिंक, सब्जी वॉशर, फर्श (पीला/नीला कपड़ा, प्रत्येक उपयोग के बाद + दैनिक)।" },
            { type: 'paragraph', text: "६.३ पेस्ट्री क्षेत्र: उपयोग में होने पर (पीला कपड़ा)।" },
            { type: 'paragraph', text: "६.४ बर्तन और सफेद क्रेट भंडारण क्षेत्र: सप्ताह में 1 बार।" },
            { type: 'paragraph', text: "६.५ विशेष रसोई उपकरण (पास्ता मशीन): हर बार जब इसका उपयोग किया जाता है।" },
            { type: 'paragraph', text: "६.६ खाद्य गोदाम: सप्ताह में 1 बार।" },
            { type: 'paragraph', text: "६.६ कार्यालय क्षेत्र (मुख्य रसोई): दिन के अंत में (हरा/नीला कपड़ा)।" },
            { type: 'paragraph', text: "६.७ कैंटीन क्षेत्र: प्रत्येक उपयोग के बाद (हरा/नीला कपड़ा)।" },
            { type: 'paragraph', text: "६.८ पार्टी हॉल: प्रत्येक कार्यक्रम के बाद (हरा/नीला कपड़ा)।" },
            { type: 'paragraph', text: "६.९ कॉलम रूम और शैले रूम: कार्यक्रम अनुसूची के अनुसार (हरा/नीला कपड़ा)।" },
            { type: 'paragraph', text: "६.१० प्रवेश क्षेत्र: दैनिक + घटनाओं के बाद (हरा/सफेद/नीला कपड़ा)।" },
            { type: 'paragraph', text: "६.११ बाहरी क्षेत्र: प्रत्येक कार्यक्रम के बाद।" },
            { type: 'paragraph', text: "६.१२ बाथरूम: दिन में एक बार + जब आवश्यक हो (लाल कपड़ा)।" },
            { type: 'paragraph', text: "६.१३ कार्यालय (वाणिज्यिक और प्रशासन): साप्ताहिक और आवश्यकतानुसार।" },
            { type: 'paragraph', text: "६.१४ सीढ़ियाँ (पार्टी हॉल साइड): साप्ताहिक।" },
        ]
      },
       {
        id: 'waste',
        title: '७. अपशिष्ट प्रबंधन',
        icon: TrashIcon,
        content: [
            { type: 'paragraph', text: "उचित अपशिष्ट प्रबंधन स्वच्छता और पर्यावरण के प्रति सम्मान के लिए आवश्यक है।" },
            {
                type: 'table',
                data: {
                    headers: ['बिन', 'कचरा'],
                    rows: [
                        ['भूरा', 'जैविक (भोजन के टुकड़े)'],
                        ['पीला', 'कागज और कार्डबोर्ड'],
                        ['हरा', 'कांच'],
                        ['नीला', 'प्लास्टिक और डिब्बे'],
                        ['काला', 'गैर-पुनर्चक्रण योग्य कचरा'],
                    ]
                }
            },
            { type: 'paragraph', text: "महत्वपूर्ण नियम:" },
            { type: 'list', items: [
                "निपटान से पहले कार्डबोर्ड बक्सों को समतल किया जाना चाहिए।",
                "लकड़ी और प्लास्टिक के क्रेट को फूस पर प्रकार के अनुसार ढेर किया जाना चाहिए।",
                "यदि संदेह है या यदि कचरा मिश्रित है, तो इसे गैर-पुनर्चक्रण योग्य बिन में निपटाएं।"
            ]}
        ]
      },
      {
        id: 'checklists',
        title: '८. क्षेत्र के अनुसार चेकलिस्ट',
        icon: ClipboardDocumentCheckIcon,
        content: [
            { type: 'paragraph', text: "यह सुनिश्चित करने के लिए इन चेकलिस्ट का उपयोग करें कि सभी ऑपरेशन सही ढंग से पूरे हो गए हैं।" },
            { type: 'paragraph', text: "पेशेवर रसोई:" },
            { type: 'list', items: [
                "दैनिक: सतहें, स्टोव, ब्रैट पैन, ग्रिल, फर्श, सब्जी क्षेत्र, पेस्ट्री क्षेत्र।",
                "द्वि-साप्ताहिक: कोल्ड रूम, फ्रायर, सेल दरवाजे।",
                "साप्ताहिक: नालियां, हुड (बाहरी), बर्तन भंडारण, स्टील के डिब्बे।",
                "मासिक: किचन हुड (फिल्टर के साथ गहरी सफाई)।"
            ]},
            { type: 'paragraph', text: "कार्यालय और कैंटीन क्षेत्र (दैनिक):" },
            { type: 'list', items: [
                "मुख्य रसोई कार्यालय, कॉफी मशीन, सतहें और मेजें, फर्श, कैंटीन क्षेत्र।"
            ]},
            { type: 'paragraph', text: "हॉल और सामान्य क्षेत्र:" },
             { type: 'list', items: [
                "दैनिक: प्रवेश क्षेत्र, दर्पण, सोफे, ऐशट्रे, कॉलम रूम।",
                "पोस्ट-इवेंट: पार्टी हॉल, हॉल किचन, हॉल ऑफिस, फर्श, बाहरी क्षेत्र।",
                "मासिक: पार्टी हॉल टाइलें, बाहरी खिड़कियां।"
            ]},
             { type: 'paragraph', text: "बाथरूम (दैनिक, न्यूनतम 2 बार):" },
            { type: 'list', items: [
                "पूर्ण सेनेटरी फिक्स्चर, कागज फिर से भरना, दर्पण, फर्श, प्रशासन कार्यालय बाथरूम।"
            ]},
        ]
      },
      {
        id: 'safety',
        title: '९. सुरक्षा नियम',
        icon: ExclamationTriangleIcon,
        content: [
            { type: 'paragraph', text: "उत्पाद उपयोग के दौरान: विभिन्न उत्पादों को कभी न मिलाएं!" },
            { type: 'list', items: [
                "उपयोग करने से पहले हमेशा लेबल पढ़ें।",
                "इंगित तनुकरण का सम्मान करें।",
                "हमेशा पीपीई (दस्ताने, काले चश्मे यदि आवश्यक हो) का उपयोग करें।",
                "उपयोग के दौरान और बाद में कमरों को हवादार करें।",
                "उपयोग के बाद कंटेनरों को बंद कर दें।"
            ]},
            { type: 'paragraph', text: "ऑपरेटर की व्यक्तिगत स्वच्छता:" },
            { type: 'list', items: [
                "बार-बार और पूरी तरह से हाथ धोना।",
                "छोटे और साफ नाखून।",
                "बाल बंधे हुए और साफ वर्दी।",
                "बंद-पैर की अंगुली गैर-पर्ची के जूते।",
                "सफाई के दौरान धूम्रपान या खाना न खाएं।"
            ]},
            { type: 'paragraph', text: "निषिद्ध व्यवहार:" },
            { type: 'list', items: [
                "विभिन्न क्षेत्रों के लिए एक ही कपड़े का उपयोग न करें।",
                "उत्पादों को खुला या लावारिस न छोड़ें।",
                "उत्पादों को 'आंख से' पतला न करें।",
                "समाप्त हो चुके उत्पादों का उपयोग न करें।",
                "डिटर्जेंट और कीटाणुनाशक न मिलाएं।",
                "धोने के चरण को न छोड़ें।"
            ]}
        ]
      },
      {
        id: 'contacts',
        title: '१०. संदर्भ और संपर्क',
        icon: PhoneIcon,
        content: [
          { type: 'paragraph', text: "संदर्भ विनियम:" },
          { type: 'list', items: [
            "ईसी विनियमन 852/2004 - खाद्य पदार्थों की स्वच्छता",
            "ईसी विनियमन 178/2002 - खाद्य सुरक्षा",
            "डीएम 274/1997 - सफाई और स्वच्छता",
            "विधायी डिक्री 193/2007 - यूरोपीय मानकों का स्थानान्तरण"
          ]},
          { type: 'paragraph', text: "आपातकालीन संपर्क:" },
          { type: 'list', items: [
            "सफाई प्रबंधक: ____________",
            "विष नियंत्रण केंद्र: ____________",
            "आपातकालीन नंबर: 112",
            "उत्पाद आपूर्तिकर्ता: ____________"
          ]},
          { type: 'paragraph', text: "'सफाई और स्वच्छता एक लागत नहीं है, बल्कि ग्राहकों के स्वास्थ्य और व्यवसाय की प्रतिष्ठा में एक निवेश है'" }
        ]
      },
      {
        id: 'bot',
        title: 'एआई सहायक',
        icon: QuestionMarkCircleIcon,
        content: [
            { type: 'bot' }
        ]
      }
    ],
    bot: {
        title: "मैनुअल का वर्चुअल असिस्टेंट",
        placeholder: "मैनुअल के बारे में एक प्रश्न पूछें...",
        button: "भेजें",
        initialMessage: "नमस्ते! मैं आपका एआई सहायक हूं। इस मैनुअल में वर्णित सफाई और स्वच्छता प्रक्रियाओं के बारे में मुझसे कुछ भी पूछें।"
    }
  }
};

export const MANUAL_CONTENT = manualData;