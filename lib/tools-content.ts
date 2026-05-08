export interface ToolFAQ {
  question: string
  answer: string
}

export interface ToolStep {
  title: string
  description: string
}

export interface RelatedTool {
  slug: string
  name: string
}

export interface ToolContent {
  slug: string
  nameNL: string
  title: string // max 60 chars
  description: string // 140-160 chars
  h1: string
  steps: ToolStep[]
  whenToUse: string // 2-3 paragraphs
  faq: ToolFAQ[]
  relatedTools: RelatedTool[]
}

export const toolsContent: Record<string, ToolContent> = {
  'merge-pdf': {
    slug: 'merge-pdf',
    nameNL: 'PDF Samenvoegen',
    title: 'PDF Samenvoegen — Gratis Online | VorzaPDF',
    description: 'Voeg meerdere PDF-bestanden samen tot één document. Snel, veilig en zonder registratie. Upload je bestanden en download direct het resultaat.',
    h1: 'PDF Samenvoegen',
    steps: [
      {
        title: 'Upload je PDF-bestanden',
        description: 'Sleep je bestanden naar het uploadveld of klik om bestanden te selecteren. Je kunt meerdere PDF\'s tegelijk uploaden.',
      },
      {
        title: 'Orden je bestanden',
        description: 'De bestanden worden samengevoegd in de volgorde waarin je ze uploadt. Zorg dat ze in de juiste volgorde staan.',
      },
      {
        title: 'Download je samengevoegd PDF',
        description: 'Klik op "PDF\'s samenvoegen" en download direct het gecombineerde bestand. Je bestanden worden automatisch verwijderd van onze server.',
      },
    ],
    whenToUse: `PDF samenvoegen is handig wanneer je meerdere losse documenten wilt combineren in één overzichtelijk bestand. Denk aan het bundelen van facturen voor je boekhouding, het samenvoegen van hoofdstukken tot één rapport, of het combineren van gescande pagina's tot één document.

Voor ondernemers en zzp'ers in Nederland en België is dit bijzonder nuttig bij het indienen van documenten bij de KVK, Belastingdienst of bank. In plaats van vijf losse bijlagen stuur je één gestructureerd PDF-bestand.

Ook voor sollicitaties is PDF samenvoegen handig: combineer je cv, motivatiebrief en diploma's in één professioneel document dat je als bijlage kunt meesturen.`,
    faq: [
      {
        question: 'Is het veilig om PDF\'s samen te voegen op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verzonden en direct na verwerking automatisch verwijderd van onze server. We slaan geen bestanden op en delen ze met niemand.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt PDF-bestanden uploaden tot 50 MB per bestand. Voor de meeste documenten is dit ruim voldoende.',
      },
      {
        question: 'Worden mijn PDF\'s bewaard op de server?',
        answer: 'Nee, alle bestanden worden direct na verwerking automatisch verwijderd. We bewaren nooit kopieën van je documenten.',
      },
      {
        question: 'Werkt PDF samenvoegen op mobiel?',
        answer: 'Ja, VorzaPDF werkt volledig in je browser en is geoptimaliseerd voor mobiele apparaten. Je hebt geen app nodig.',
      },
      {
        question: 'Hoeveel kost PDF samenvoegen?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kun je kiezen uit een eenmalige betaling (€1,20), een creditpakket (€4,99 voor 5 credits) of een maandabonnement (€7,99 voor onbeperkt gebruik).',
      },
      {
        question: 'Hoeveel PDF\'s kan ik tegelijk samenvoegen?',
        answer: 'Je kunt meerdere PDF-bestanden tegelijk uploaden en samenvoegen. Er is geen limiet op het aantal bestanden, alleen op de totale bestandsgrootte.',
      },
    ],
    relatedTools: [
      { slug: 'split-pdf', name: 'PDF Splitsen' },
      { slug: 'compress-pdf', name: 'PDF Comprimeren' },
      { slug: 'remove-pages', name: 'Pagina\'s Verwijderen' },
    ],
  },

  'split-pdf': {
    slug: 'split-pdf',
    nameNL: 'PDF Splitsen',
    title: 'PDF Splitsen — Gratis Online | VorzaPDF',
    description: 'Splits een PDF in losse pagina\'s. Elke pagina wordt een apart PDF-bestand, gebundeld in een ZIP. Snel en veilig, zonder installatie.',
    h1: 'PDF Splitsen',
    steps: [
      {
        title: 'Upload je PDF',
        description: 'Sleep je PDF-bestand naar het uploadveld of klik om een bestand te selecteren.',
      },
      {
        title: 'Automatisch splitsen',
        description: 'VorzaPDF splitst je PDF automatisch in losse pagina\'s. Elke pagina wordt een apart bestand.',
      },
      {
        title: 'Download de ZIP',
        description: 'Download een ZIP-bestand met alle losse pagina\'s als aparte PDF-bestanden.',
      },
    ],
    whenToUse: `PDF splitsen is ideaal als je één of meerdere specifieke pagina's uit een groot document nodig hebt. Bijvoorbeeld bij het extraheren van een enkele factuur uit een bundel, of het losmaken van een specifiek hoofdstuk uit een rapport.

In de administratie kom je vaak grote PDF-bestanden tegen met meerdere documenten erin. Met PDF splitsen kun je snel de juiste pagina's eruit halen voor je boekhouding of belastingaangifte.

Ook handig als je een gescand document hebt ontvangen met meerdere pagina's en je wilt ze apart opslaan of doorsturen naar verschillende personen.`,
    faq: [
      {
        question: 'Is het veilig om een PDF te splitsen op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verzonden en direct na verwerking automatisch verwijderd. We slaan geen kopieën op.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt PDF-bestanden uploaden tot 50 MB. Voor de meeste documenten is dit ruim voldoende.',
      },
      {
        question: 'Worden mijn PDF\'s bewaard op de server?',
        answer: 'Nee, alle uploads worden direct na verwerking verwijderd van onze server.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, VorzaPDF werkt volledig in de browser en is geschikt voor smartphones en tablets.',
      },
      {
        question: 'Hoeveel kost PDF splitsen?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'In welk formaat krijg ik de gesplitste pagina\'s?',
        answer: 'Je ontvangt een ZIP-bestand met daarin elke pagina als apart PDF-bestand, genummerd per pagina.',
      },
    ],
    relatedTools: [
      { slug: 'merge-pdf', name: 'PDF Samenvoegen' },
      { slug: 'remove-pages', name: 'Pagina\'s Verwijderen' },
      { slug: 'rotate-pdf', name: 'PDF Draaien' },
    ],
  },

  'compress-pdf': {
    slug: 'compress-pdf',
    nameNL: 'PDF Comprimeren',
    title: 'PDF Comprimeren — Gratis Online | VorzaPDF',
    description: 'Verklein je PDF-bestand met behoud van kwaliteit. Ideaal voor e-mail bijlagen en uploads. Snel, veilig en zonder registratie.',
    h1: 'PDF Comprimeren',
    steps: [
      {
        title: 'Upload je PDF',
        description: 'Sleep je PDF naar het uploadveld of klik om een bestand te selecteren.',
      },
      {
        title: 'Automatisch comprimeren',
        description: 'VorzaPDF verkleint je PDF automatisch met behoud van de originele kwaliteit.',
      },
      {
        title: 'Download het verkleinde bestand',
        description: 'Download de gecomprimeerde PDF. Het origineel wordt niet aangepast.',
      },
    ],
    whenToUse: `PDF comprimeren is onmisbaar wanneer je een PDF-bestand moet versturen via e-mail maar het bestand te groot is. De meeste mailproviders hebben een limiet van 10-25 MB voor bijlagen.

Bij het uploaden van documenten naar portalen van de overheid, banken of werkgevers is er vaak een maximale bestandsgrootte. Met VorzaPDF verklein je je PDF zodat deze binnen de limieten past, zonder kwaliteitsverlies.

Ook handig voor het opslaan van gescande documenten. Scans van hoge kwaliteit zijn vaak onnodig groot — comprimeer ze om opslagruimte te besparen op je computer of in de cloud.`,
    faq: [
      {
        question: 'Is het veilig om PDF\'s te comprimeren op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verwerkt en direct daarna automatisch verwijderd. We bewaren geen kopieën.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt PDF-bestanden tot 50 MB uploaden voor compressie.',
      },
      {
        question: 'Worden mijn PDF\'s bewaard op de server?',
        answer: 'Nee, alle bestanden worden direct na verwerking verwijderd van onze server.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, VorzaPDF is volledig responsief en werkt op elk apparaat met een browser.',
      },
      {
        question: 'Hoeveel kost PDF comprimeren?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'Verlies ik kwaliteit bij het comprimeren?',
        answer: 'VorzaPDF optimaliseert de interne structuur van je PDF zonder de visuele kwaliteit aan te tasten. Tekst en afbeeldingen blijven scherp.',
      },
    ],
    relatedTools: [
      { slug: 'merge-pdf', name: 'PDF Samenvoegen' },
      { slug: 'pdf-to-jpg', name: 'PDF naar JPG' },
      { slug: 'watermark-pdf', name: 'Watermerk op PDF' },
    ],
  },

  'rotate-pdf': {
    slug: 'rotate-pdf',
    nameNL: 'PDF Draaien',
    title: 'PDF Draaien — Gratis Online | VorzaPDF',
    description: 'Draai alle pagina\'s van je PDF 90°, 180° of 270°. Handig voor gescande documenten die verkeerd staan. Snel en gratis.',
    h1: 'PDF Draaien',
    steps: [
      {
        title: 'Upload je PDF',
        description: 'Sleep je PDF-bestand naar het uploadveld of klik om te selecteren.',
      },
      {
        title: 'Kies de draaihoek',
        description: 'Selecteer of je de pagina\'s 90° met de klok mee, 180° of 270° wilt draaien.',
      },
      {
        title: 'Download de gedraaide PDF',
        description: 'Klik op "PDF Draaien" en download het resultaat direct.',
      },
    ],
    whenToUse: `PDF draaien is vooral handig bij gescande documenten die in de verkeerde oriëntatie zijn opgeslagen. Dit komt vaak voor bij scanners die pagina's automatisch invoeren — soms komen ze ondersteboven of op hun kant terecht.

Als je een document hebt ontvangen dat in landschapsformaat is opgeslagen terwijl het in portretformaat zou moeten staan, kun je het eenvoudig corrigeren met deze tool.

Ook nuttig voor formulieren van de overheid of officiële documenten die je moet invullen en die in de verkeerde richting zijn gescand. Draai ze snel in de juiste stand voordat je ze doorstuurt.`,
    faq: [
      {
        question: 'Is het veilig om PDF\'s te draaien op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verwerkt en direct na verwerking verwijderd. We bewaren geen kopieën.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt PDF-bestanden tot 50 MB uploaden.',
      },
      {
        question: 'Worden mijn PDF\'s bewaard op de server?',
        answer: 'Nee, bestanden worden direct na verwerking verwijderd.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, de tool werkt in elke mobiele browser zonder app.',
      },
      {
        question: 'Hoeveel kost PDF draaien?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'Kan ik individuele pagina\'s draaien?',
        answer: 'Deze tool draait alle pagina\'s tegelijk. Wil je specifieke pagina\'s aanpassen? Gebruik dan onze AI PDF Editor.',
      },
    ],
    relatedTools: [
      { slug: 'remove-pages', name: 'Pagina\'s Verwijderen' },
      { slug: 'compress-pdf', name: 'PDF Comprimeren' },
      { slug: 'edit-pdf', name: 'PDF Bewerken met AI' },
    ],
  },

  'remove-pages': {
    slug: 'remove-pages',
    nameNL: 'Pagina\'s Verwijderen',
    title: 'Pagina\'s Verwijderen uit PDF — Gratis | VorzaPDF',
    description: 'Verwijder specifieke pagina\'s uit je PDF-bestand. Voer de paginanummers in en download het resultaat direct. Snel en gratis.',
    h1: 'Pagina\'s Verwijderen uit PDF',
    steps: [
      {
        title: 'Upload je PDF',
        description: 'Sleep je PDF naar het uploadveld of klik om een bestand te selecteren.',
      },
      {
        title: 'Voer paginanummers in',
        description: 'Typ de nummers van de pagina\'s die je wilt verwijderen, gescheiden door komma\'s (bijv. 1, 3, 5-7).',
      },
      {
        title: 'Download de bewerkte PDF',
        description: 'Klik op "Pagina\'s verwijderen" en download je PDF zonder de ongewenste pagina\'s.',
      },
    ],
    whenToUse: `Pagina's verwijderen is ideaal wanneer je een PDF hebt met overbodige pagina's die je niet wilt meesturen. Denk aan een rapport met een voorblad dat je wilt weglaten, of een document met lege pagina's aan het einde.

Bij het delen van contracten of offertes wil je soms bepaalde bijlagen of voorwaarden achterwege laten. Met deze tool verwijder je precies de pagina's die niet relevant zijn voor de ontvanger.

Ook handig bij gescande documenten waar per ongeluk een verkeerde pagina is meegescand, of bij het voorbereiden van documenten voor officiële instanties waar je alleen specifieke pagina's hoeft in te leveren.`,
    faq: [
      {
        question: 'Is het veilig om pagina\'s te verwijderen op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verwerkt en direct na verwerking automatisch verwijderd van onze server.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt PDF-bestanden tot 50 MB uploaden.',
      },
      {
        question: 'Worden mijn PDF\'s bewaard op de server?',
        answer: 'Nee, alle bestanden worden direct na verwerking verwijderd.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, VorzaPDF werkt in elke browser, ook op je smartphone.',
      },
      {
        question: 'Hoeveel kost het?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'Kan ik een reeks pagina\'s opgeven?',
        answer: 'Ja, je kunt individuele nummers (1, 3, 5) of reeksen (5-7) opgeven, gescheiden door komma\'s.',
      },
    ],
    relatedTools: [
      { slug: 'split-pdf', name: 'PDF Splitsen' },
      { slug: 'merge-pdf', name: 'PDF Samenvoegen' },
      { slug: 'rotate-pdf', name: 'PDF Draaien' },
    ],
  },

  'pdf-to-word': {
    slug: 'pdf-to-word',
    nameNL: 'PDF naar Word',
    title: 'PDF naar Word Converteren — Gratis | VorzaPDF',
    description: 'Converteer PDF naar bewerkbaar Word-document (.docx). Tekst en opmaak worden behouden. Snel, veilig en zonder registratie.',
    h1: 'PDF naar Word Converteren',
    steps: [
      {
        title: 'Upload je PDF',
        description: 'Sleep je PDF-bestand naar het uploadveld of klik om een bestand te selecteren.',
      },
      {
        title: 'Automatisch converteren',
        description: 'VorzaPDF extraheert de tekst uit je PDF en maakt er een bewerkbaar Word-document van.',
      },
      {
        title: 'Download het Word-bestand',
        description: 'Download je .docx bestand en open het in Word, Google Docs of een ander tekstverwerkingsprogramma.',
      },
    ],
    whenToUse: `PDF naar Word converteren is essentieel als je de tekst in een PDF wilt bewerken. PDF-bestanden zijn ontworpen om niet-bewerkbaar te zijn, maar soms moet je toch aanpassingen maken — bijvoorbeeld in een contract, verslag of formulier.

Voor studenten is dit handig bij het verwerken van studiemateriaal. Je kunt de tekst uit een PDF halen en er aantekeningen bij maken in Word. Ook bij het bewerken van een cv dat je alleen als PDF hebt, is deze tool onmisbaar.

Administratieve medewerkers gebruiken deze tool om gegevens uit PDF-formulieren over te nemen in hun eigen documenten, zonder alles handmatig over te hoeven typen.`,
    faq: [
      {
        question: 'Is het veilig om PDF naar Word te converteren op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verwerkt en direct na verwerking verwijderd. We bewaren geen kopieën.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt PDF-bestanden tot 50 MB uploaden voor conversie.',
      },
      {
        question: 'Worden mijn PDF\'s bewaard op de server?',
        answer: 'Nee, alle bestanden worden direct na verwerking verwijderd.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, je kunt het Word-bestand downloaden op elk apparaat en later openen.',
      },
      {
        question: 'Hoeveel kost PDF naar Word?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'Blijft de opmaak behouden?',
        answer: 'VorzaPDF detecteert automatisch koppen en paragrafen. Complexe opmaak zoals tabellen kan beperkt worden overgenomen.',
      },
    ],
    relatedTools: [
      { slug: 'doc-to-pdf', name: 'Word naar PDF' },
      { slug: 'edit-pdf', name: 'PDF Bewerken met AI' },
      { slug: 'summarize-pdf', name: 'PDF Samenvatten' },
    ],
  },

  'pdf-to-jpg': {
    slug: 'pdf-to-jpg',
    nameNL: 'PDF naar JPG',
    title: 'PDF naar JPG Converteren — Gratis | VorzaPDF',
    description: 'Converteer elke pagina van je PDF naar een JPG-afbeelding van hoge kwaliteit. Download alle afbeeldingen als ZIP. Snel en gratis.',
    h1: 'PDF naar JPG Converteren',
    steps: [
      {
        title: 'Upload je PDF',
        description: 'Sleep je PDF naar het uploadveld of klik om een bestand te selecteren.',
      },
      {
        title: 'Automatisch converteren',
        description: 'Elke pagina van je PDF wordt omgezet naar een scherpe JPG-afbeelding.',
      },
      {
        title: 'Download de afbeeldingen',
        description: 'Download een ZIP-bestand met alle pagina\'s als losse JPG-bestanden.',
      },
    ],
    whenToUse: `PDF naar JPG is handig wanneer je afbeeldingen uit een PDF nodig hebt voor een presentatie, social media of website. Niet elk platform accepteert PDF-bestanden, maar JPG-afbeeldingen worden overal ondersteund.

Als je een grafiek, diagram of infographic uit een PDF wilt delen op LinkedIn, Instagram of in een e-mail, converteer je de relevante pagina simpelweg naar een afbeelding.

Ook nuttig bij het maken van previews of thumbnails van documenten, bijvoorbeeld voor een documentbeheersysteem of portfolio. Elke pagina wordt een scherpe afbeelding die je overal kunt gebruiken.`,
    faq: [
      {
        question: 'Is het veilig om PDF naar JPG te converteren op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verwerkt en direct na verwerking verwijderd.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt PDF-bestanden tot 50 MB uploaden.',
      },
      {
        question: 'Worden mijn PDF\'s bewaard op de server?',
        answer: 'Nee, alle bestanden worden direct na verwerking verwijderd.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, de tool werkt in elke browser op elk apparaat.',
      },
      {
        question: 'Hoeveel kost PDF naar JPG?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'Wat is de kwaliteit van de afbeeldingen?',
        answer: 'De afbeeldingen worden gerenderd op 2x resolutie (150 DPI equivalent) voor scherpe, heldere resultaten.',
      },
    ],
    relatedTools: [
      { slug: 'jpg-to-pdf', name: 'JPG naar PDF' },
      { slug: 'compress-pdf', name: 'PDF Comprimeren' },
      { slug: 'split-pdf', name: 'PDF Splitsen' },
    ],
  },

  'jpg-to-pdf': {
    slug: 'jpg-to-pdf',
    nameNL: 'JPG naar PDF',
    title: 'JPG naar PDF Converteren — Gratis | VorzaPDF',
    description: 'Converteer JPG- en PNG-afbeeldingen naar een professioneel PDF-document. Meerdere foto\'s in één PDF. Snel, veilig en gratis.',
    h1: 'JPG naar PDF Converteren',
    steps: [
      {
        title: 'Upload je afbeeldingen',
        description: 'Sleep je JPG- of PNG-bestanden naar het uploadveld. Je kunt meerdere afbeeldingen tegelijk uploaden.',
      },
      {
        title: 'Automatisch converteren',
        description: 'VorzaPDF plaatst elke afbeelding netjes op een A4-pagina met de juiste schaling.',
      },
      {
        title: 'Download de PDF',
        description: 'Download je PDF-bestand met alle afbeeldingen netjes geordend.',
      },
    ],
    whenToUse: `JPG naar PDF converteren is ideaal wanneer je foto's of gescande afbeeldingen wilt bundelen in één professioneel document. Denk aan het samenstellen van een fotoboek, portfolio of bewijsstukken.

Bij het indienen van documenten bij de gemeente, UWV of Belastingdienst wordt vaak gevraagd om een PDF-bestand. Als je alleen foto's hebt van je documenten (bijvoorbeeld met je telefoon gefotografeerd), kun je ze hiermee omzetten naar een nette PDF.

Ook handig voor het bewaren van bonnetjes en kwitanties voor je administratie. Maak foto's van je bonnen en converteer ze naar één overzichtelijk PDF-bestand.`,
    faq: [
      {
        question: 'Is het veilig om afbeeldingen te converteren op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verwerkt en direct na verwerking verwijderd.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt afbeeldingen tot 50 MB per bestand uploaden.',
      },
      {
        question: 'Worden mijn bestanden bewaard op de server?',
        answer: 'Nee, alle uploads worden direct na verwerking verwijderd.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, ideaal voor het direct converteren van foto\'s die je met je telefoon hebt gemaakt.',
      },
      {
        question: 'Hoeveel kost JPG naar PDF?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'Welke bestandsformaten worden ondersteund?',
        answer: 'Je kunt JPG/JPEG en PNG-bestanden uploaden. Alle afbeeldingen worden netjes geschaald naar A4-formaat.',
      },
    ],
    relatedTools: [
      { slug: 'pdf-to-jpg', name: 'PDF naar JPG' },
      { slug: 'merge-pdf', name: 'PDF Samenvoegen' },
      { slug: 'compress-pdf', name: 'PDF Comprimeren' },
    ],
  },

  'doc-to-pdf': {
    slug: 'doc-to-pdf',
    nameNL: 'Word naar PDF',
    title: 'Word naar PDF Converteren — Gratis | VorzaPDF',
    description: 'Converteer tekstbestanden en HTML naar PDF. Ideaal voor facturen en documenten. Snel, veilig en zonder registratie.',
    h1: 'Word naar PDF Converteren',
    steps: [
      {
        title: 'Upload je document',
        description: 'Sleep je .txt of .html bestand naar het uploadveld of klik om te selecteren.',
      },
      {
        title: 'Automatisch converteren',
        description: 'VorzaPDF zet je document om naar een netjes opgemaakt PDF-bestand met correcte paginering.',
      },
      {
        title: 'Download de PDF',
        description: 'Download je PDF-bestand direct. Het origineel wordt niet aangepast.',
      },
    ],
    whenToUse: `Document naar PDF converteren is essentieel wanneer je een tekstbestand of factuur wilt delen in een professioneel, niet-bewerkbaar formaat. PDF-bestanden zien er op elk apparaat hetzelfde uit, wat ze ideaal maakt voor officiële communicatie.

Voor ondernemers die facturen versturen als tekstbestand of HTML is deze tool onmisbaar. Converteer je factuur naar PDF voordat je hem naar je klant stuurt — het oogt professioneler en kan niet per ongeluk worden aangepast.

Ook handig voor het archiveren van teksten, notities of HTML-pagina's als PDF. Zo bewaar je ze in een universeel formaat dat altijd leesbaar blijft, ongeacht het programma dat je gebruikt.`,
    faq: [
      {
        question: 'Is het veilig om documenten te converteren op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verwerkt en direct na verwerking verwijderd.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt bestanden tot 50 MB uploaden.',
      },
      {
        question: 'Worden mijn bestanden bewaard op de server?',
        answer: 'Nee, alle bestanden worden direct na verwerking verwijderd.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, VorzaPDF werkt op elk apparaat met een browser.',
      },
      {
        question: 'Hoeveel kost document naar PDF?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'Welke bestandsformaten worden ondersteund?',
        answer: 'Je kunt .txt (platte tekst) en .html (webpagina) bestanden uploaden en converteren naar PDF.',
      },
    ],
    relatedTools: [
      { slug: 'pdf-to-word', name: 'PDF naar Word' },
      { slug: 'compress-pdf', name: 'PDF Comprimeren' },
      { slug: 'merge-pdf', name: 'PDF Samenvoegen' },
    ],
  },

  'watermark-pdf': {
    slug: 'watermark-pdf',
    nameNL: 'Watermerk op PDF',
    title: 'Watermerk op PDF Zetten — Gratis | VorzaPDF',
    description: 'Voeg een tekst-watermerk toe aan elke pagina van je PDF. Bescherm je documenten tegen ongeoorloofd gebruik. Snel en gratis.',
    h1: 'Watermerk op PDF Zetten',
    steps: [
      {
        title: 'Upload je PDF',
        description: 'Sleep je PDF-bestand naar het uploadveld of klik om te selecteren.',
      },
      {
        title: 'Voer je watermerktekst in',
        description: 'Typ de tekst die als watermerk op elke pagina moet verschijnen, bijvoorbeeld "VERTROUWELIJK" of "CONCEPT".',
      },
      {
        title: 'Download de PDF met watermerk',
        description: 'Download je PDF met het watermerk diagonaal over elke pagina.',
      },
    ],
    whenToUse: `Een watermerk op je PDF plaatsen is belangrijk om je documenten te beschermen tegen ongeoorloofd gebruik of verspreiding. Markeer vertrouwelijke documenten met "VERTROUWELIJK" of conceptversies met "CONCEPT".

Bij het delen van offertes of contracten in de onderhandelingsfase kun je een watermerk "CONCEPT" toevoegen, zodat duidelijk is dat het nog geen definitieve versie betreft.

Ook nuttig voor creatieve professionals die portfolio's of presentaties delen en willen aangeven dat het materiaal auteursrechtelijk beschermd is. Een watermerk ontmoedigt ongeoorloofd kopiëren.`,
    faq: [
      {
        question: 'Is het veilig om een watermerk toe te voegen op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verwerkt en direct na verwerking verwijderd.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt PDF-bestanden tot 50 MB uploaden.',
      },
      {
        question: 'Worden mijn PDF\'s bewaard op de server?',
        answer: 'Nee, alle bestanden worden direct na verwerking verwijderd.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, de tool werkt in elke browser op elk apparaat.',
      },
      {
        question: 'Hoeveel kost het?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'Kan ik de watermerktekst zelf kiezen?',
        answer: 'Ja, je kunt elke gewenste tekst invoeren als watermerk. Populaire opties zijn "VERTROUWELIJK", "CONCEPT" of "NIET KOPIËREN".',
      },
    ],
    relatedTools: [
      { slug: 'compress-pdf', name: 'PDF Comprimeren' },
      { slug: 'page-numbers', name: 'Paginanummers in PDF' },
      { slug: 'rotate-pdf', name: 'PDF Draaien' },
    ],
  },

  'page-numbers': {
    slug: 'page-numbers',
    nameNL: 'Paginanummers in PDF',
    title: 'Paginanummers in PDF — Gratis | VorzaPDF',
    description: 'Voeg automatisch paginanummers toe aan je PDF. Kies boven- of onderkant. Ideaal voor rapporten en scripties. Snel en gratis.',
    h1: 'Paginanummers Toevoegen aan PDF',
    steps: [
      {
        title: 'Upload je PDF',
        description: 'Sleep je PDF naar het uploadveld of klik om een bestand te selecteren.',
      },
      {
        title: 'Kies de positie',
        description: 'Selecteer of de paginanummers boven of onder aan de pagina moeten komen.',
      },
      {
        title: 'Download de PDF met paginanummers',
        description: 'Download je PDF met automatisch genummerde pagina\'s.',
      },
    ],
    whenToUse: `Paginanummers toevoegen is essentieel voor professionele documenten zoals rapporten, scripties, handleidingen en contracten. Zonder paginanummers is het lastig om naar specifieke pagina's te verwijzen.

Voor studenten die een scriptie of verslag inleveren zijn paginanummers vaak verplicht. Met VorzaPDF voeg je ze in enkele seconden toe, zonder het hele document opnieuw op te moeten maken.

Ook handig voor het organiseren van vergaderstukken, notulen of juridische documenten. Met paginanummers kan iedereen snel de juiste pagina vinden tijdens een bespreking.`,
    faq: [
      {
        question: 'Is het veilig om paginanummers toe te voegen op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verwerkt en direct na verwerking verwijderd.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt PDF-bestanden tot 50 MB uploaden.',
      },
      {
        question: 'Worden mijn PDF\'s bewaard op de server?',
        answer: 'Nee, alle bestanden worden direct na verwerking verwijderd.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, VorzaPDF werkt in elke browser op elk apparaat.',
      },
      {
        question: 'Hoeveel kost het?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'Kan ik kiezen waar de nummers komen?',
        answer: 'Ja, je kunt kiezen tussen boven- of onderkant van de pagina. De nummers worden gecentreerd geplaatst.',
      },
    ],
    relatedTools: [
      { slug: 'watermark-pdf', name: 'Watermerk op PDF' },
      { slug: 'merge-pdf', name: 'PDF Samenvoegen' },
      { slug: 'compress-pdf', name: 'PDF Comprimeren' },
    ],
  },

  'summarize-pdf': {
    slug: 'summarize-pdf',
    nameNL: 'PDF Samenvatten met AI',
    title: 'PDF Samenvatten met AI — Gratis | VorzaPDF',
    description: 'Laat AI je PDF samenvatten in seconden. Krijg de kernpunten en inzichten uit elk document. Snel, veilig en in het Nederlands.',
    h1: 'PDF Samenvatten met AI',
    steps: [
      {
        title: 'Upload je PDF',
        description: 'Sleep je PDF-bestand naar het uploadveld of klik om te selecteren.',
      },
      {
        title: 'AI analyseert je document',
        description: 'Onze AI leest je document en identificeert de belangrijkste punten en conclusies.',
      },
      {
        title: 'Lees de samenvatting',
        description: 'Bekijk de samenvatting met de kernpunten van je document, direct in je browser.',
      },
    ],
    whenToUse: `PDF samenvatten met AI is ideaal wanneer je snel de essentie van een lang document wilt begrijpen zonder alles te hoeven lezen. Denk aan onderzoeksrapporten, beleidsstukken of juridische documenten.

Voor professionals die dagelijks veel documenten verwerken bespaart deze tool uren leestijd. Upload een rapport en krijg binnen seconden de belangrijkste conclusies en aanbevelingen.

Studenten gebruiken deze tool om snel de kern van studiemateriaal te begrijpen voordat ze het volledige document lezen. Zo kun je sneller bepalen welke bronnen relevant zijn voor je onderzoek.`,
    faq: [
      {
        question: 'Is het veilig om PDF\'s te laten samenvatten op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verwerkt. De inhoud wordt tijdelijk naar onze AI gestuurd voor analyse en direct daarna verwijderd.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt PDF-bestanden tot 50 MB uploaden. De tekst wordt beperkt tot ca. 12.000 tekens voor optimale verwerking.',
      },
      {
        question: 'Worden mijn PDF\'s bewaard op de server?',
        answer: 'Nee, je bestanden en de samenvatting worden niet opgeslagen na verwerking.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, je kunt de samenvatting direct lezen op je smartphone of tablet.',
      },
      {
        question: 'Hoeveel kost PDF samenvatten?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'In welke taal is de samenvatting?',
        answer: 'De AI maakt de samenvatting in dezelfde taal als het originele document. Nederlandse documenten krijgen een Nederlandse samenvatting.',
      },
    ],
    relatedTools: [
      { slug: 'edit-pdf', name: 'PDF Bewerken met AI' },
      { slug: 'pdf-to-word', name: 'PDF naar Word' },
      { slug: 'compress-pdf', name: 'PDF Comprimeren' },
    ],
  },

  'edit-pdf': {
    slug: 'edit-pdf',
    nameNL: 'PDF Bewerken met AI',
    title: 'PDF Bewerken met AI — Gratis | VorzaPDF',
    description: 'Bewerk je PDF met AI. Tekst vervangen, toevoegen of verwijderen — vertel gewoon wat je wilt aanpassen. Snel en in het Nederlands.',
    h1: 'PDF Bewerken met AI',
    steps: [
      {
        title: 'Upload je PDF',
        description: 'Sleep je PDF naar het uploadveld of klik om te selecteren.',
      },
      {
        title: 'Geef instructies aan de AI',
        description: 'Vertel in het chatvenster wat je wilt aanpassen, bijvoorbeeld "Vervang het adres op pagina 1" of "Voeg een titel toe".',
      },
      {
        title: 'Download de bewerkte PDF',
        description: 'Bekijk het resultaat in de preview en download je aangepaste PDF.',
      },
    ],
    whenToUse: `PDF bewerken met AI is de slimste manier om snel aanpassingen te doen in een PDF-bestand. In plaats van complexe PDF-editors te gebruiken, vertel je in gewoon Nederlands wat er moet veranderen.

Ideaal voor het aanpassen van een fout in een factuur, het wijzigen van contactgegevens in een offerte, of het toevoegen van een opmerking aan een contract. De AI begrijpt je instructie en voert de wijziging automatisch uit.

Ook handig voor het vertalen van tekst in een PDF, het aanpassen van datums, of het toevoegen van ontbrekende informatie. Je hoeft niet te weten hoe PDF-bewerking technisch werkt — de AI doet het voor je.`,
    faq: [
      {
        question: 'Is het veilig om PDF\'s te bewerken op VorzaPDF?',
        answer: 'Ja, je bestanden worden versleuteld verwerkt. De inhoud wordt tijdelijk geanalyseerd door AI en direct na verwerking verwijderd.',
      },
      {
        question: 'Wat is de maximale bestandsgrootte?',
        answer: 'Je kunt PDF-bestanden tot 50 MB uploaden voor bewerking.',
      },
      {
        question: 'Worden mijn PDF\'s bewaard op de server?',
        answer: 'Nee, alle bestanden worden direct na verwerking verwijderd.',
      },
      {
        question: 'Werkt het op mobiel?',
        answer: 'Ja, maar voor de beste ervaring raden we een desktop-browser aan vanwege de PDF-preview en het chatvenster.',
      },
      {
        question: 'Hoeveel kost PDF bewerken?',
        answer: 'Je eerste conversie per dag is gratis. Daarna kies je uit een eenmalige betaling (€1,20), credits (€4,99 voor 5) of onbeperkt (€7,99/maand).',
      },
      {
        question: 'Welke bewerkingen kan de AI uitvoeren?',
        answer: 'De AI kan tekst vervangen, toevoegen en verwijderen, en afbeeldingen invoegen. Je geeft instructies in gewoon Nederlands.',
      },
    ],
    relatedTools: [
      { slug: 'summarize-pdf', name: 'PDF Samenvatten met AI' },
      { slug: 'pdf-to-word', name: 'PDF naar Word' },
      { slug: 'watermark-pdf', name: 'Watermerk op PDF' },
    ],
  },
}

// Helper to get all tool slugs
export const allToolSlugs = Object.keys(toolsContent)
