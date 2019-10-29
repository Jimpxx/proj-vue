# Projekt Frontend

Till frontenden på projektet används Vue.js, Chart.js, vue-chartjs, Socket.io-client, vue-router, vuex, axios.

Som ramverk till projektet valde jag att använda mig av Vue.js. Jag har använt Vue under hela kursens gång och jag känner att jag börjar förstå det bättre och jag kände att det skulle bli för stort att ge sig på att testa på något nytt till projektet. Även om jag hade velat testa på React så valde jag att ta det ramverk jag känner att jag kan behärska mest.

Som i kursmomentet för realtid valde jag att använda mig av Socket.io-client för att kommunicera med Socket.io från serversidan. Jag testade på att använda mig av Vues version av Socket.io-klient men tyckte att den inte hade så bra dokumentation som den vanliga versionen så jag valde att använda den.

För att visa upp grafen valde jag att använda mig av Vues version av Chart.js (vue-chartjs) som i stort sätt är Chart.js med några tillägg som gör det enklare att använda med Vue. För att använda sig av vue-chartjs behöver Chart.js finnas installerat. Jag hade ganska stora problem att få grafen att visas och fick ta hjälp av flera guider och tillslut hittade jag en som fungerade någorlunda. Jag fick göra lite ändringar för att få det som jag önskade. jag känner att jag behöver mer tid med verktyget för att förstå de mer och använda det vid fler tillfällen så jag kan lära mig det bättre. Tillslut fick jag det i alla fall att fungera som jag ville.

Vue-router och Vuex används i detta projekt för att de är verktyg som Vue utvecklat och man kan ta med i sitt projekt. Vue-router sköter själva routingen i applikationen och Vuex sköter applikationens state. Jag lagrar Token och användaren i state så att dessa är tillgängliga på alla sidor genom applikationen.

För att utföra förfrågningar till servern använder jag mig av Axios och Fetch. jag har under kursens gång använt mig av Fetch, i slutet av kursen har jag börjat tröttna på att Fetch behöver så många steg för att få fram data i förfrågningen. Jag valde därför att testa på Axios i projektet. Jag kan redan nu säga att jag lutar åt att föredra Axios framför Fetch då det verkar mer kraftfullt och det inte krävs lika många steg för att få ut den önskade data. Det kan hända att jag bara använder Fetch på ett felaktigt sätt, detta får jag göra vidare efterforskningar på. I projektet har jag använt Fetch på de ställen jag använt Fetch på under tidigare kursmoment och använder Axios vid de tillfällen jag gör nya förfrågningar till servern.
