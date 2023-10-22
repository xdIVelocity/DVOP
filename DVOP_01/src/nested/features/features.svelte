<div class="second-main">
    <div class="main-left">
        <img src="/Images/marginalia-online-shopping.svg" alt="" />
    </div>
    <div class="main-right">
        <div id="headers">
            <h4>Mel solum</h4>
            <h1>Mazim iudico</h1>
        </div>
        <div class="paragraphs">
            <div id="paragraphs-left">
                <p>
                    <img src="Images\checkmark.svg" alt="" />Usu vitae
                </p>
                <p>
                    <img src="Images\checkmark.svg" alt="" />Usu vitae
                </p>
                <p>
                    <img src="Images\checkmark.svg" alt="" />Usu vitae
                </p>
                <p>
                    <img src="Images\checkmark.svg" alt="" />Usu vitae
                </p>
            </div>
            <div id="paragraphs-right">
                <p>
                    <img src="Images\checkmark.svg" alt="" />Decore ut
                </p>
                <p>
                    <img src="Images\checkmark.svg" alt="" />Decore ut
                </p>
                <p>
                    <img src="Images\checkmark.svg" alt="" />Decore ut
                </p>
                <p>
                    <img src="Images\checkmark.svg" alt="" />Decore ut
                </p>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .second-main {
        align-self: center;
        width: 80%;
        margin: 10vh 10%;
        display: flex;
        justify-content: space-between;
        .main-right {
            margin: 0;
            padding: 0;
            h4 {
                font-family: DM Sans;
                font-size: 20px;
                font-weight: 700;
                color: #be6361;
            }
            h1 {
                font-family: Alfa Slab One;
                font-size: 72px;
                font-weight: 400;
                line-height: 80px;
            }
            p {
                img {
                    margin-right: 1em;
                }
                font-family: DM Sans;
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
                letter-spacing: 0px;
            }
            .paragraphs {
                display: flex;
                width: 100%;
                #paragraphs-left {
                    margin-right: 5em;
                }
            }
        }
    }
</style>
