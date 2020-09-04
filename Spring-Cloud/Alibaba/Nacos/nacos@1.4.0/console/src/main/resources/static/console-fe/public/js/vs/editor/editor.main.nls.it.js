/*
 * Copyright 1999-2018 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define("vs/editor/editor.main.nls.it", {
  "vs/base/browser/ui/actionbar/actionbar": ["{0} ({1})"],
  "vs/base/browser/ui/aria/aria": ["{0} (nuova occorrenza)"],
  "vs/base/browser/ui/findinput/findInput": ["input"],
  "vs/base/browser/ui/findinput/findInputCheckboxes": ["Maiuscole/minuscole", "Parola intera", "Usa espressione regolare"],
  "vs/base/browser/ui/inputbox/inputBox": ["Errore: {0}", "Avviso: {0}", "Info: {0}"],
  "vs/base/common/keybindingLabels": ["CTRL", "MAIUSC", "ALT", "Windows", "CTRL", "MAIUSC", "ALT", "Comando", "CTRL", "MAIUSC", "ALT", "Windows"],
  "vs/base/common/severity": ["Errore", "Avviso", "Informazioni"],
  "vs/base/parts/quickopen/browser/quickOpenModel": ["{0}, selezione", "selezione"],
  "vs/base/parts/quickopen/browser/quickOpenWidget": ["Selezione rapida. Digitare per ridurre il numero di risultati.", "Selezione rapida"],
  "vs/base/parts/tree/browser/treeDefaults": ["Comprimi"],
  "vs/editor/browser/widget/diffEditorWidget": ["Non è possibile confrontare i file perché uno è troppo grande."],
  "vs/editor/browser/widget/diffReview": ["Chiudi", "Differenza {0} di {1}: originali {2}, {3} righe, modificate {4}, righe {5}", "vuota", "originali {0}, modificate {1}: {2}", "+ modificate {0}: {1}", "- originali {0}: {1}", "Vai alla differenza successiva", "Vai alla differenza precedente"],
  "vs/editor/common/config/commonEditorConfig": ["Editor", "Controlla la famiglia di caratteri.", "Controlla lo spessore del carattere.", "Controlla le dimensioni del carattere in pixel.", "Controlla l'altezza della riga. Usare 0 per calcolare l'altezza della riga dalle dimensioni del carattere.", "Controlla la spaziatura tra le lettere in pixel.", "Consente di controllare la visualizzazione dei numeri di riga. I valori possibili sono 'on', 'off' e 'relative'. Con 'relative' viene visualizzato il conteggio delle righe a partire dalla posizione corrente del cursore.", "Colonne in corrispondenza delle quali visualizzare i righelli verticali", "Caratteri che verranno usati come separatori di parola quando si eseguono operazioni o spostamenti correlati a parole", "Numero di spazi a cui equivale una tabulazione. Quando `editor.detectIndentation` è attivo, questa impostazione viene sostituita in base al contenuto del file.", "È previsto 'number'. Nota: il valore \"auto\" è stato sostituito dall'impostazione `editor.detectIndentation`.", "Inserisce spazi quando viene premuto TAB. Quando `editor.detectIndentation` è attivo, questa impostazione viene sostituita in base al contenuto del file.", "È previsto 'boolean'. Nota: il valore \"auto\" è stato sostituito dall'impostazione `editor.detectIndentation`.", "All'apertura di un file, `editor.tabSize` e `editor.insertSpaces` verranno rilevati in base al contenuto del file.", "Controlla se gli angoli delle selezioni sono arrotondati", "Controlla se l'editor scorrerà oltre l'ultima riga", "Controlla se la mini mappa è visualizzata", "Controlla se lo slider della mini mappa viene nascosto automaticamente.", "Esegue il rendering dei caratteri effettivi di una riga (in contrapposizione ai blocchi colore)", "Limita la larghezza della mini mappa in modo da eseguire il rendering al massimo di un certo numero di colonne", "Controlla se inizializzare la stringa di ricerca nel Widget Trova con il testo selezionato nell'editor", "Controlla se l'impostazione Trova nella selezione è attivata quando vengono selezionati più caratteri o righe di testo nell'editor", "Il wrapping delle righe non viene eseguito.", "Verrà eseguito il wrapping delle righe in base alla larghezza del viewport.", "Verrà eseguito il wrapping delle righe alla posizione corrispondente a `editor.wordWrapColumn`.", "Verrà eseguito il wrapping delle righe alla posizione minima del viewport e di `editor.wordWrapColumn`.", "Controlla il wrapping delle righe. Valori possibili:\n - 'off' (disabilita il wrapping),\n - 'on' (wrapping del viewport),\n - 'wordWrapColumn' (esegue il wrapping alla posizione corrispondente a `editor.wordWrapColumn`) o\n - 'bounded' (esegue il wrapping alla posizione minima del viewport e di `editor.wordWrapColumn`).", "Controlla la colonna di wrapping dell'editor quando il valore di `editor.wordWrap` è 'wordWrapColumn' o 'bounded'.", "Controlla il rientro delle righe con ritorno a capo. Può essere uno dei valori seguenti: 'none', 'same' o 'indent'.", "Moltiplicatore da usare sui valori `deltaX` e `deltaY` degli eventi di scorrimento della rotellina del mouse", "Rappresenta il tasto 'Control' (ctrl) su Windows e Linux e il tasto 'Comando' (cmd) su OSX.", "Rappresenta il tasto 'Alt' su Windows e Linux e il tasto 'Opzione' su OSX.", "Il modificatore da utilizzare per aggiungere molteplici cursori con il mouse. 'ctrlCmd' rappresenta il tasto 'Control' su Windows e Linux e  il tasto 'Comando' su OSX. I gesti del mouse Vai a definizione e Apri il Link si adatteranno in modo da non entrare in conflitto con il modificatore multi-cursore.", "Abilita i suggerimenti rapidi all'interno di stringhe.", "Abilita i suggerimenti rapidi all'interno di commenti.", "Abilita i suggerimenti rapidi all'esterno di stringhe e commenti.", "Controlla se visualizzare automaticamente i suggerimenti durante la digitazione", "Controlla il ritardo in ms dopo il quale verranno visualizzati i suggerimenti rapidi", "Abilita un popup che mostra documentazione sui parametri e informazioni sui tipi mentre si digita", "Controlla se l'editor deve chiudere automaticamente le parentesi quadre dopo che sono state aperte", "Controlla se l'editor deve formattare automaticamente la riga dopo la digitazione", "Controlla se l'editor deve formattare automaticamente il contenuto incollato. Deve essere disponibile un formattatore che deve essere in grado di formattare un intervallo in un documento.", "Controlla se l'editor deve correggere automaticamente l'indentazione mentre l'utente digita, incolla o sposta delle righe. Devono essere disponibili le regole di indentazione del linguaggio.", "Controlla se i suggerimenti devono essere visualizzati automaticamente durante la digitazione dei caratteri trigger", "Controlla se i suggerimenti devono essere accettati con 'INVIO' in aggiunta a 'TAB'. In questo modo è possibile evitare ambiguità tra l'inserimento di nuove righe e l'accettazione di suggerimenti. Il valore 'smart' indica di accettare un suggerimento con 'INVIO' quando comporta una modifica al testo", "Controlla se accettare i suggerimenti con i caratteri di commit. Ad esempio, in JavaScript il punto e virgola (';') può essere un carattere di commit che accetta un suggerimento e digita tale carattere.", "Visualizza i suggerimenti dello snippet sopra gli altri suggerimenti.", "Visualizza i suggerimenti dello snippet sotto gli altri suggerimenti.", "Visualizza i suggerimenti degli snippet insieme agli altri suggerimenti.", "Non mostrare i suggerimenti sugli snippet.", "Controlla se i frammenti di codice sono visualizzati con altri suggerimenti e il modo in cui sono ordinati.", "Consente di controllare se, quando si copia senza aver effettuato una selezione, viene copiata la riga corrente.", "Controlla se calcolare i completamenti in base alle parole presenti nel documento.", "Dimensioni del carattere per il widget dei suggerimenti", "Altezza della riga per il widget dei suggerimenti", "Controlla se l'editor deve evidenziare gli elementi corrispondenti simili alla selezione", "Controlla se l'editor deve evidenziare le occorrenze di simboli semantici", "Controlla il numero di effetti che possono essere visualizzati nella stessa posizione nel righello delle annotazioni", "Controlla se deve essere disegnato un bordo intorno al righello delle annotazioni.", "Controlla lo stile di animazione del cursore. I valori possibili sono: 'blink', 'smooth', 'phase', 'expand' e 'solid'", "Ingrandisce il carattere dell'editor quando si usa la rotellina del mouse e si tiene premuto CTRL", "Controlla lo stile del cursore. I valori accettati sono 'block', 'block-outline', 'line', 'line-thin', 'underline' e 'underline-thin'", "Abilita i caratteri legatura", "Controlla se il cursore deve essere nascosto nel righello delle annotazioni.", "Consente di controllare in che modo l'editor deve eseguire il rendering dei caratteri di spazio vuoto. Le opzioni possibili sono: 'none', 'boundary' e 'all'. Con l'opzione 'boundary' non viene eseguito il rendering di singoli spazi tra le parole.", "Controlla se l'editor deve eseguire il rendering dei caratteri di controllo", "Controlla se l'editor deve eseguire il rendering delle guide con rientro", "Consente di controllare in che modo l'editor deve eseguire il rendering dell'evidenziazione di riga corrente. Le opzioni possibili sono 'none', 'gutter', 'line' e 'all'.", "Controlla se nell'editor sono visualizzate le finestre di CodeLens", "Controlla se per l'editor è abilitata la riduzione del codice", "Controlla se i controlli di riduzione sul margine della barra di scorrimento sono automaticamente nascosti.", "Evidenzia le parentesi corrispondenti quando se ne seleziona una.", "Controlla se l'editor deve eseguire il rendering del margine verticale del glifo. Il margine del glifo viene usato principalmente per il debug.", "Inserimento ed eliminazione dello spazio vuoto dopo le tabulazioni", "Rimuovi lo spazio vuoto finale inserito automaticamente", "Mantiene aperti gli editor rapidi anche quando si fa doppio clic sul contenuto o si preme ESC.", "Controlla se l'editor consentire lo spostamento di selezioni tramite trascinamento della selezione.", "L'editor utilizzerà API della piattaforma per rilevare quando è collegata un'utilità per la lettura dello schermo.", "L'editor sarà definitivamente ottimizzato per l'utilizzo con un'utilità per la lettura dello schermo.", "L'editor non sarà mai ottimizzato per l'utilizzo con un'utilità per la lettura dello schermo.", "Controlla se l'editor deve essere eseguito in una modalità ottimizzata per le utilità per la lettura dello schermo.", "Controlla se l'editor deve individuare i collegamenti e renderli cliccabili", "Controlla se l'editor diff mostra le differenze affiancate o incorporate", "Controlla se l'editor diff mostra come differenze le modifiche relative a spazi vuoti iniziali e finali", "Consente di controllare se l'editor diff mostra gli indicatori +/- per le modifiche aggiunte/rimosse", "Controlla se gli appunti primari di Linux devono essere supportati."],
  "vs/editor/common/config/editorOptions": ["L'editor non è accessibile in questo momento. Premere Alt+F1 per le opzioni.", "Contenuto editor"],
  "vs/editor/common/controller/cursor": ["Eccezione imprevista durante l'esecuzione del comando."],
  "vs/editor/common/model/textModelWithTokens": ["Si è verificato un errore della modalità durante la suddivisione in token dell'input."],
  "vs/editor/common/modes/modesRegistry": ["Testo normale"],
  "vs/editor/common/services/bulkEdit": ["Nel frattempo questi file sono stati modificati: {0}", "Non sono state effettuate modifiche", "Effettuate {0} modifiche al testo in {1} file", "Effettuate {0} modifiche al testo in un file"],
  "vs/editor/common/services/modelServiceImpl": ["[{0}]\n{1}", "[{0}] {1}"],
  "vs/editor/common/view/editorColorRegistry": ["Colore di sfondo per l'evidenziazione della riga alla posizione del cursore.", "Colore di sfondo per il bordo intorno alla riga alla posizione del cursore.", "Colore di sfondo degli intervalli evidenziati, ad esempio dalle funzionalità Quick Open e Trova.", "Colore del cursore dell'editor.", "Colore di sfondo del cursore editor. Permette di personalizzare il colore di un carattere quando sovrapposto da un blocco cursore.", "Colore dei caratteri di spazio vuoto nell'editor.", "Colore delle guide per i rientri dell'editor.", "Colore dei numeri di riga dell'editor.", "Colore dei righelli dell'editor.", "Colore primo piano delle finestre di CodeLens dell'editor", "Colore di sfondo delle parentesi corrispondenti", "Colore delle caselle di parentesi corrispondenti", "Colore del bordo del righello delle annotazioni.", "Colore di sfondo della barra di navigazione dell'editor. La barra contiene i margini di glifo e i numeri di riga.", "Colore primo piano degli squiggle di errore nell'editor.", "Colore del bordo degli squiggle di errore nell'editor.", "Colore primo piano degli squiggle di avviso nell'editor", "Colore del bordo degli squggle di avviso nell'editor."],
  "vs/editor/contrib/bracketMatching/common/bracketMatching": ["Vai alla parentesi"],
  "vs/editor/contrib/caretOperations/common/caretOperations": ["Sposta il punto di inserimento a sinistra", "Sposta il punto di inserimento a destra"],
  "vs/editor/contrib/caretOperations/common/transpose": ["Trasponi lettere"],
  "vs/editor/contrib/clipboard/browser/clipboard": ["Taglia", "Copia", "Incolla", "Copia con evidenziazione sintassi"],
  "vs/editor/contrib/comment/common/comment": ["Attiva/Disattiva commento per la riga", "Aggiungi commento per la riga", "Rimuovi commento per la riga", "Attiva/Disattiva commento per il blocco"],
  "vs/editor/contrib/contextmenu/browser/contextmenu": ["Mostra il menu di scelta rapida editor"],
  "vs/editor/contrib/find/browser/findWidget": ["Trova", "Trova", "Risultato precedente", "Risultato successivo", "Trova nella selezione", "Chiudi", "Sostituisci", "Sostituisci", "Sostituisci", "Sostituisci tutto", "Attiva/Disattiva modalità sostituzione", "Vengono evidenziati solo i primi 999 risultati, ma tutte le operazioni di ricerca funzionano sull'intero testo.", "{0} di {1}", "Nessuna impostazione corrispondente"],
  "vs/editor/contrib/find/common/findController": ["Trova", "Trova successivo", "Trova precedente", "Trova selezione successiva", "Trova selezione precedente", "Sostituisci", "Aggiungi selezione a risultato ricerca successivo", "Aggiungi selezione a risultato ricerca precedente", "Sposta ultima selezione a risultato ricerca successivo", "Sposta ultima selezione a risultato ricerca precedente", "Seleziona tutte le occorrenze del risultato ricerca", "Cambia tutte le occorrenze", "Mostra il termine di ricerca successivo", "Mostra il termine di ricerca precedente"],
  "vs/editor/contrib/folding/browser/folding": ["Espandi", "Espandi in modo ricorsivo", "Riduci", "Riduci in modo ricorsivo", "Riduci tutto", "Espandi tutto", "Livello riduzione {0}"],
  "vs/editor/contrib/format/browser/formatActions": ["È stata apportata 1 modifica di formattazione a riga {0}", "Sono state apportate {0} modifiche di formattazione a riga {1}", "È stata apportata 1 modifica di formattazione tra le righe {0} e {1}", "Sono state apportate {0} modifiche di formattazione tra le righe {1} e {2}", "Formatta documento", "Formatta selezione"],
  "vs/editor/contrib/goToDeclaration/browser/goToDeclarationCommands": ["Non è stata trovata alcuna definizione per '{0}'", "Non è stata trovata alcuna definizione", " - Definizioni di {0}", "Vai alla definizione", "Apri definizione lateralmente", "Visualizza la definizione", "Non sono state trovate implementazioni per '{0}'", "Non sono state trovate implementazioni", "- {0} implementazioni", "Vai all'implementazione", "Anteprima implementazione", "Non sono state trovate definizioni di tipi per '{0}'", "Non sono state trovate definizioni di tipi", " - {0} definizioni di tipo", "Vai alla definizione di tipo", "Anteprima definizione di tipo"],
  "vs/editor/contrib/goToDeclaration/browser/goToDeclarationMouse": ["Fare clic per visualizzare {0} definizioni."],
  "vs/editor/contrib/gotoError/browser/gotoError": ["({0}/{1})", "Vai a errore o avviso successivo", "Vai a errore o avviso precedente", "Colore per gli errori del widget di spostamento tra marcatori dell'editor.", "Colore per gli avvisi del widget di spostamento tra marcatori dell'editor.", "Sfondo del widget di spostamento tra marcatori dell'editor."],
  "vs/editor/contrib/hover/browser/hover": ["Visualizza passaggio del mouse"],
  "vs/editor/contrib/hover/browser/modesContentHover": ["Caricamento..."],
  "vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": ["Sostituisci con il valore precedente", "Sostituisci con il valore successivo"],
  "vs/editor/contrib/linesOperations/common/linesOperations": ["Copia la riga in alto", "Copia la riga in basso", "Sposta la riga in alto", "Sposta la riga in basso", "Ordinamento righe crescente", "Ordinamento righe decrescente", "Taglia spazio vuoto finale", "Elimina la riga", "Imposta un rientro per la riga", "Riduci il rientro per la riga", "Inserisci la riga sopra", "Inserisci la riga sotto", "Elimina tutto a sinistra", "Elimina tutto a destra", "Unisci righe", "Trasponi caratteri intorno al cursore", "Converti in maiuscolo", "Converti in minuscolo"],
  "vs/editor/contrib/links/browser/links": ["Cmd + clic per seguire il collegamento", "CTRL + clic per seguire il collegamento", "Cmd + click per eseguire il comando", "Ctrl + clic per eseguire il comando", "Alt + clic per seguire il collegamento", "Alt + clic per eseguire il comando", "Non è stato possibile aprire questo collegamento perché il formato non è valido: {0}", "Non è stato possibile aprire questo collegamento perché manca la destinazione.", "Apri il collegamento"],
  "vs/editor/contrib/multicursor/common/multicursor": ["Aggiungi cursore sopra", "Aggiungi cursore sotto", "Aggiungi cursore alla fine delle righe"],
  "vs/editor/contrib/parameterHints/browser/parameterHints": ["Attiva i suggerimenti per i parametri"],
  "vs/editor/contrib/parameterHints/browser/parameterHintsWidget": ["{0}, suggerimento"],
  "vs/editor/contrib/quickFix/browser/quickFixCommands": ["Mostra correzioni ({0})", "Mostra correzioni", "Correzione rapida"],
  "vs/editor/contrib/referenceSearch/browser/referenceSearch": [" - Riferimenti di {0}", "Trova tutti i riferimenti"],
  "vs/editor/contrib/referenceSearch/browser/referencesController": ["Caricamento..."],
  "vs/editor/contrib/referenceSearch/browser/referencesModel": ["simbolo in {0} alla riga {1} colonna {2}", "1 simbolo in {0}, percorso completo {1}", "{0} simboli in {1}, percorso completo {2}", "Non sono stati trovati risultati", "Trovato 1 simbolo in {0}", "Trovati {0} simboli in {1}", "Trovati {0} simboli in {1} file"],
  "vs/editor/contrib/referenceSearch/browser/referencesWidget": ["Non è stato possibile risolvere il file.", "{0} riferimenti", "{0} riferimento", "anteprima non disponibile", "Riferimenti", "Nessun risultato", "Riferimenti", "Colore di sfondo dell'area del titolo della visualizzazione rapida.", "Colore del titolo della visualizzazione rapida.", "Colore delle informazioni del titolo della visualizzazione rapida.", "Colore dei bordi e della freccia della visualizzazione rapida.", "Colore di sfondo dell'elenco risultati della visualizzazione rapida.", "Colore primo piano dei nodi riga nell'elenco risultati della visualizzazione rapida.", "Colore primo piano dei nodi file nell'elenco risultati della visualizzazione rapida.", "Colore di sfondo della voce selezionata nell'elenco risultati della visualizzazione rapida.", "Colore primo piano della voce selezionata nell'elenco risultati della visualizzazione rapida.", "Colore di sfondo dell'editor di visualizzazioni rapide.", "Colore di sfondo della barra di navigazione nell'editor visualizzazione rapida.", "Colore dell'evidenziazione delle corrispondenze nell'elenco risultati della visualizzazione rapida.", "Colore dell'evidenziazione delle corrispondenze nell'editor di visualizzazioni rapide."],
  "vs/editor/contrib/rename/browser/rename": ["Nessun risultato.", "Correttamente rinominato '{0}' in '{1}'. Sommario: {2}", "L'esecuzione dell'operazione di ridenominazione non è riuscita.", "Rinomina simbolo"],
  "vs/editor/contrib/rename/browser/renameInputField": ["Consente di rinominare l'input. Digitare il nuovo nome e premere INVIO per eseguire il commit."],
  "vs/editor/contrib/smartSelect/common/smartSelect": ["Espandi SELECT", "Comprimi SELECT"],
  "vs/editor/contrib/suggest/browser/suggestController": ["L'accettazione di '{0}' ha inserito il seguente testo: {1}", "Attiva suggerimento"],
  "vs/editor/contrib/suggest/browser/suggestWidget": ["Colore di sfondo del widget dei suggerimenti.", "Colore del bordo del widget dei suggerimenti.", "Colore primo piano del widget dei suggerimenti.", "Colore di sfondo della voce selezionata del widget dei suggerimenti.", "Colore delle evidenziazioni corrispondenze nel widget dei suggerimenti.", "Altre informazioni...{0}", "{0}, suggerimento, con dettagli", "{0}, suggerimento", "Meno informazioni... {0}", "Caricamento...", "Non ci sono suggerimenti.", "{0}, accettato", "{0}, suggerimento, con dettagli", "{0}, suggerimento"],
  "vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": ["Attiva/Disattiva l'uso di TAB per spostare lo stato attivo"],
  "vs/editor/contrib/wordHighlighter/common/wordHighlighter": ["Colore di sfondo di un simbolo durante l'accesso in lettura, ad esempio durante la lettura di una variabile.", "Colore di sfondo di un simbolo durante l'accesso in scrittura, ad esempio durante la scrittura in una variabile."],
  "vs/editor/contrib/zoneWidget/browser/peekViewWidget": ["Chiudi"],
  "vs/editor/standalone/browser/inspectTokens/inspectTokens": ["Developer: Inspect Tokens"],
  "vs/editor/standalone/browser/quickOpen/gotoLine": ["Go to line {0} and character {1}", "Go to line {0}", "Type a line number between 1 and {0} to navigate to", "Type a character between 1 and {0} to navigate to", "Go to line {0}", "Type a line number, followed by an optional colon and a character number to navigate to", "Go to Line..."],
  "vs/editor/standalone/browser/quickOpen/quickCommand": ["{0}, commands", "Type the name of an action you want to execute", "Command Palette"],
  "vs/editor/standalone/browser/quickOpen/quickOutline": ["{0}, symbols", "Type the name of an identifier you wish to navigate to", "Go to Symbol...", "symbols ({0})", "modules ({0})", "classes ({0})", "interfaces ({0})", "methods ({0})", "functions ({0})", "properties ({0})", "variables ({0})", "variables ({0})", "constructors ({0})", "calls ({0})"],
  "vs/editor/standalone/browser/standaloneCodeEditor": ["Editor content", "Press Ctrl+F1 for Accessibility Options.", "Press Alt+F1 for Accessibility Options."],
  "vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast": ["Toggle High Contrast Theme"],
  "vs/platform/configuration/common/configurationRegistry": ["Override configurazione predefinita", "Consente di configurare le impostazioni dell'editor di cui eseguire l'override per il linguaggio {0}.", "Consente di configurare le impostazioni dell'editor di cui eseguire l'override per un linguaggio.", "Non è possibile registrare '{0}'. Corrisponde al criterio di proprietà '\\\\[.*\\\\]$' per la descrizione delle impostazioni dell'editor specifiche del linguaggio. Usare il contributo 'configurationDefaults'.", "Non è possibile registrare '{0}'. Questa proprietà è già registrata."],
  "vs/platform/keybinding/common/abstractKeybindingService": ["È stato premuto ({0}). In attesa del secondo tasto...", "La combinazione di tasti ({0}, {1}) non è un comando."],
  "vs/platform/message/common/message": ["Chiudi", "In seguito", "Annulla"],
  "vs/platform/theme/common/colorRegistry": ["Formato colore non valido. Usare #RGB, #RGBA, #RRGGBB o #RRGGBBAA", "Colori usati nell'area di lavoro.", "Colore primo piano. Questo colore è utilizzato solo se non viene sovrascritto da un componente.", "Colore primo piano globale per i messaggi di errore. Questo colore è utilizzato solamente se non viene sottoposto a override da un componente.", "Colore primo piano del testo che fornisce informazioni aggiuntive, ad esempio per un'etichetta di testo.", "Colore dei bordi degli elementi evidenziati. Questo colore è utilizzato solo se non viene sovrascritto da un componente.", "Un bordo supplementare attorno agli elementi per contrastarli maggiormente rispetto agli altri.", "Un bordo supplementare intorno agli elementi attivi per contrastarli maggiormente rispetto agli altri.", "Il colore di sfondo delle selezioni di testo nel workbench (ad esempio per i campi di input o aree di testo). Si noti che questo non si applica alle selezioni all'interno dell'editor.", "Colore dei separatori di testo.", "Colore primo piano dei link nel testo.", "Colore primo piano dei link attivi nel testo.", "Colore primo piano dei segmenti di testo preformattato.", "Colore di sfondo per le citazioni nel testo.", "Colore bordo per citazioni nel testo.", "Colore sfondo per blocchi di codice nel testo.", "Colore ombreggiatura dei widget, ad es. Trova/Sostituisci all'interno dell'editor.", "Sfondo della casella di input.", "Primo piano della casella di input.", "Bordo della casella di input.", "Colore del bordo di opzioni attivate nei campi di input.", "Colore primo piano di casella di input per il testo segnaposto.", "Colore di sfondo di convalida dell'input di tipo Informazione.", "Colore bordo di convalida dell'input di tipo Informazione.", "Colore di sfondo di convalida dell'input di tipo Avviso.", "Colore bordo di convalida dell'input di tipo Avviso.", "Colore di sfondo di convalida dell'input di tipo Errore.", "Colore bordo di convalida dell'input di tipo Errore.", "Sfondo dell'elenco a discesa.", "Primo piano dell'elenco a discesa.", "Bordo dell'elenco a discesa.", "Colore sfondo Elenco/Struttura ad albero per l'elemento evidenziato quando l'Elenco/Struttura ad albero è attivo. Un Elenco/Struttura ad albero attivo\nha il focus della tastiera, uno inattivo no.", "Colore primo piano Elenco/Struttura ad albero per l'elemento con stato attivo quando l'Elenco/Struttura ad albero è attivo. Un Elenco/Struttura ad albero attivo\nha il focus della tastiera, uno inattivo no.", "Colore sfondo Elenco/Struttura ad albero per l'elemento selezionato quando l'Elenco/Struttura ad albero è attivo. Un Elenco/Struttura ad albero attivo\nha il focus della tastiera, uno inattivo no.", "Colore primo piano Elenco/Struttura ad albero per l'elemento selezionato quando l'Elenco/Struttura ad albero è attivo. Un Elenco/Struttura ad albero attivo\nha il focus della tastiera, uno inattivo no.", "Colore sfondo Elenco/Struttura ad albero per l'elemento selezionato quando l'Elenco/Struttura ad albero è inattivo. Un Elenco/Struttura ad albero attivo\nha il focus della tastiera, uno inattivo no.", "Colore primo piano Elenco/Struttura ad albero per l'elemento selezionato quando l'Elenco/Struttura ad albero è inattivo. Un Elenco/Struttura ad albero attivo\nha il focus della tastiera, uno inattivo no.", "Colore sfondo Elenco/Struttura ad albero per l'elemento selezionato quando l'Elenco/Struttura ad albero è inattivo. Un Elenco/Struttura ad albero attivo\nha il focus della tastiera, uno inattivo no.", "Colore primo piano Elenco/Struttura ad albero per l'elemento selezionato quando l'Elenco/Struttura ad albero è inattivo. Un Elenco/Struttura ad albero attivo\nha il focus della tastiera, uno inattivo no.", "Sfondo Elenco/Struttura ad albero al passaggio del mouse sugli elementi.", "Primo piano Elenco/Struttura ad albero al passaggio del mouse sugli elementi.", "Sfondo Elenco/Struttura ad albero durante il trascinamento degli elementi selezionati.", "Colore primo piano Elenco/Struttura ad albero delle occorrenze trovate durante la ricerca nell'Elenco/Struttura ad albero.", "Colore di selezione rapida per il raggruppamento delle etichette.", "Colore di selezione rapida per il raggruppamento dei bordi.", "Colore primo piano del pulsante.", "Colore di sfondo del pulsante.", "Colore di sfondo del pulsante al passaggio del mouse.", "Colore di sfondo del badge. I badge sono piccole etichette informative, ad esempio per mostrare il conteggio dei risultati di una ricerca.", "Colore primo piano del badge. I badge sono piccole etichette informative, ad esempio per mostrare il conteggio dei risultati di una ricerca.", "Ombra di ScrollBar per indicare lo scorrimento della visualizzazione.", "Colore di sfondo dello slider della barra di scorrimento.", "Colore di sfondo dello Slider della Barra di scorrimento al passaggio del mouse.", "Colore di sfondo dello Slider della Barra di scorrimento quando è attivo.", "Colore di sfondo dell'indicatore di stato che può essere mostrato durante l'esecuzione di operazioni lunghe.", "Colore di sfondo dell'editor.", "Colore primo piano predefinito dell'editor.", "Colore di sfondo dei widget dell'editor, ad esempio Trova/Sostituisci.", "Colore bordo dei widget dell'editor. Il colore viene utilizzato solo se il widget sceglie di avere un bordo e se il colore non è sottoposto a override da un widget.", "Colore della selezione dell'editor.", "Colore del testo selezionato per il contrasto elevato.", "Colore della selezione in un editor inattivo.", "Colore delle aree con lo stesso contenuto della selezione.", "Colore della corrispondenza di ricerca corrente.", "Colore delle altre corrispondenze di ricerca.", "Colore dell'intervallo di ricerca.", "Evidenziazione sotto la parola per cui è visualizzata un'area sensibile al passaggio del mouse.", "Colore di sfondo dell'area sensibile al passaggio del mouse dell'editor.", "Colore del bordo dell'area sensibile al passaggio del mouse dell'editor.", "Colore dei collegamenti attivi.", "Colore di sfondo del testo che è stato inserito.", "Colore di sfondo del testo che è stato rimosso.", "Colore del contorno del testo che è stato inserito.", "Colore del contorno del testo che è stato rimosso.", "Sfondo intestazione corrente in conflitti di merge in linea.", "Sfondo contenuto corrente in conflitti di merge in linea.", "Sfondo intestazione modifica in ingresso in conflitti di merge in linea.", "Sfondo contenuto modifica in ingresso in conflitti di merge in linea.", "Sfondo dell'intestazione dell'antenato comune nei conflitti di merge in linea.", "Sfondo del contenuto dell'antenato comune nei conflitti di merge in linea.", "Colore bordo su intestazioni e sulla barra di divisione di conflitti di merge in linea.", "Colore primo piano righello panoramica attuale per i conflitti di merge in linea.", "Colore primo piano del righello panoramica modifiche in arrivo per i conflitti di merge in linea.", "Colore primo piano righello panoramica dell'antenato comune per i conflitti di merge in linea."]
});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.it.js.map
