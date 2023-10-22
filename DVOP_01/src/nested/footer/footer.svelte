<div class="main-footer">
    <h2>Timeam scriptorem</h2>
    <div id="contact">
        <div id="contactItem">
            <img src="Images\map.svg" alt="" />
            <div>
                <h5>Office</h5>
                <p>Mel erat timeam, 123 45-67</p>
            </div>
        </div>
        <div id="contactItem">
            <img src="Images\device-mobile.svg" alt="" />
            <div>
                <h5>Call us</h5>
                <p>+1 234 567 89 00</p>
            </div>
        </div>
        <div id="contactItem">
            <img src="Images\mail.svg" alt="" />
            <div>
                <h5>Write us</h5>
                <p>info@gmail.com</p>
            </div>
        </div>
    </div>
    <div id="links">
        <div id="linksLeft">
            <h3>LOGO</h3>
            <p>
                Sit alii tantas viderer no. An mel nostrum appareat. Ad consul
                facilis est. Vix habeo scaevola percipitur ne, qui noster
                abhorreant ne.
            </p>
            <div id="images">
                <img src="Images\Path.svg" alt="" />
                <img src="Images\Path (1).svg" alt="" />
                <img src="Images\Shape.svg" alt="" />
            </div>
        </div>
        <div id="linksRight">
            <div>
                <h5>Habeo</h5>
                <p>Scaevola</p>
                <p>Scaevola</p>
                <p>Scaevola</p>
                <p>Scaevola</p>
                <p>Scaevola</p>
            </div>
            <div>
                <h5>Indoctum</h5>
                <p>Fierent</p>
                <p>Fierent</p>
                <p>Fierent</p>
                <p>Fierent</p>
                <p>Fierent</p>
            </div>
            <div>
                <h5>Quaestio</h5>
                <p>Erroribus</p>
                <p>Erroribus</p>
                <p>Erroribus</p>
                <p>Erroribus</p>
                <p>Erroribus</p>
            </div>
        </div>
    </div>
</div>


<style lang="scss">
    .main-footer {
        width: 95%;
        margin: 0 2.5%;
        h2 {
            text-align: center;
            font-family: Alfa Slab One;
            font-size: 56px;
            font-weight: 400;
        }
        #contact {
            color: #333333;
            width: 100%;
            justify-content: space-evenly;
            display: flex;
            #contactItem {
                border-radius: 5px;
                border: 0.5px solid #e5e5e5;
                width: 30%;
                padding: 2em 0.5em;
                align-items: center;

                background-color: white;
                display: flex;
                h5 {
                    font-family: DM Sans;
                    font-size: 24px;
                    font-weight: 700;
                    margin: 0;
                    padding: 5px;
                }
                p {
                    font-family: DM Sans;
                    font-size: 16px;
                    font-weight: 400;
                    padding: 5px;
                    margin: 0;
                    color: #33333380;
                }
                img {
                    margin-right: 1.5em;
                    margin-left: 1em;
                }
            }
        }
        #links {
            margin-top: 10em;
            display: flex;
        }
        #linksLeft {
            width: 60%;
            h3 {
                font-family: Alfa Slab One;
                font-size: 40px;
                font-weight: 400;
                line-height: 48px;
                letter-spacing: 0px;
                text-align: left;
            }
            p {
                font-family: DM Sans;
                font-size: 20px;
                font-weight: 400;
                line-height: 32px;
                letter-spacing: 0px;
                text-align: left;
            }
            img {
                margin-right: 0.8em;
            }
        }
        #linksRight {
            display: flex;
            justify-content: space-evenly;
            width: 40%;
            div {
            }
            h5 {
                font-family: DM Sans;
                font-size: 16px;
                font-weight: 700;
                margin-bottom: 2.5em;
            }
            p {
                font-family: DM Sans;
                font-size: 16px;
                font-weight: 400;
                color: #FFFFFF80;
            }
        }
    }
    
</style>
