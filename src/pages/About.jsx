function About() {
    return (
        <>
            <section className="about-hero">
                <div>
                    <h1>L'Arte della Ricercatezza.</h1>
                    <p>
                        Dal 2012, LUXE seleziona solo l'eccellenza per chi non accetta
                        compromessi tra stile e sostanza.
                    </p>
                </div>
            </section>

            <section className="about-story">
                <div>
                    <h2>La Nostra Storia</h2>

                    <p>
                        LUXE non è solo un negozio, è il risultato di una visione nata in un
                        piccolo studio di design nel cuore dell'Italia.
                    </p>

                    <p>
                        Ogni prodotto nel nostro catalogo è sottoposto a una rigorosa
                        selezione. Collaboriamo solo con artigiani e brand che condividono
                        la nostra ossessione per il dettaglio.
                    </p>

                    <p>
                        Crediamo che la bellezza risieda nella semplicità e che
                        l'esperienza d'acquisto debba essere fluida, trasparente e
                        ispiratrice.
                    </p>
                </div>

                <div className="about-story-image">
                    <img src="/img/about-story.jpg" alt="Artigianalità LUXE" />
                </div>
            </section>

            <section className="values-section">
                <h2>I Nostri Valori Fondamentali</h2>
                <p>
                    Ciò che ci guida ogni giorno nella scelta dei prodotti e nel rapporto
                    con i nostri clienti.
                </p>

                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">♻</div>
                        <h3>Sostenibilità</h3>
                        <p>
                            Selezioniamo partner che rispettano l'ambiente e utilizzano
                            materiali eco-compatibili.
                        </p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">✺</div>
                        <h3>Qualità</h3>
                        <p>
                            Ogni cucitura, ogni materiale e ogni finitura devono superare i
                            nostri standard d'eccellenza.
                        </p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">♡</div>
                        <h3>Focus Cliente</h3>
                        <p>
                            Il nostro servizio clienti è pensato per offrirvi un'esperienza
                            serena e personalizzata.
                        </p>
                    </div>
                </div>
            </section>

            <section className="newsletter-blue">
                <h2>Pronto a scoprire il lusso quotidiano?</h2>
                <p>
                    Unisciti alla nostra community per anteprime esclusive e consigli di
                    stile.
                </p>

                <form>
                    <input type="email" placeholder="La tua email" />
                    <button>Iscriviti</button>
                </form>
            </section>
        </>
    )
}

export default About