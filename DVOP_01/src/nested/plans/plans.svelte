<div class="plans">
    <h5>Mazim nemore</h5>
    <h2>Nullam ornatus</h2>
    <div class="plan-features">
        <div class="plan-item" id="planItem1">
            <div class="headers">
                <h5>Maiestatis</h5>
                <div class="price">
                    <h3>$</h3>
                    <h1>9</h1>
                </div>
            </div>
            <p>
                <img src="Images\checkmark.svg" alt="" />An mel everti invenire
            </p>
            <p>
                <img src="Images\checkmark.svg" alt="" />Intellegam legendos
            </p>
            <p>
                <img src="Images\checkmark.svg" alt="" />Consequuntur eu sit
            </p>
            <p>
                <img src="Images\checkmark.svg" alt="" />Solet nostrum
            </p>
            <p>
                <img src="Images\checkmark.svg" alt="" />An mel everti invenire
            </p>
        </div>
        <div class="plan-item" id="planItem2">
            <div class="headers">
                <h5>Essent</h5>
                <div class="price">
                    <h3>$</h3>
                    <h1>24</h1>
                </div>
            </div>
            <p>
                <img src="Images\lightCheckmark.svg" alt="" />An mel everti
                invenire
            </p>
            <p>
                <img src="Images\lightCheckmark.svg" alt="" />Intellegam
                legendos
            </p>
            <p>
                <img src="Images\lightCheckmark.svg" alt="" />Consequuntur eu
                sit
            </p>
            <p>
                <img src="Images\lightCheckmark.svg" alt="" />Solet nostrum
            </p>
            <p>
                <img src="Images\lightCheckmark.svg" alt="" />An mel everti
                invenire
            </p>
        </div>
        <div class="plan-item" id="planItem3">
            <div class="headers">
                <h5>Ornatus</h5>
                <div class="price">
                    <h3>$</h3>
                    <h1>99</h1>
                </div>
            </div>
            <p>
                <img src="Images\checkmark.svg" alt="" />An mel everti invenire
            </p>
            <p>
                <img src="Images\checkmark.svg" alt="" />Intellegam legendos
            </p>
            <p>
                <img src="Images\checkmark.svg" alt="" />Consequuntur eu sit
            </p>
            <p>
                <img src="Images\checkmark.svg" alt="" />Solet nostrum
            </p>
            <p>
                <img src="Images\checkmark.svg" alt="" />An mel everti invenire
            </p>
        </div>
    </div>
    <h4>
        Diam facilisi insolens per cu, eos malorum voluptaria esse
        concludaturque facete quaeque consequat
    </h4>
</div>

<style lang="scss">
    .plans {
        display: flex;
        align-items: center;
        flex-direction: column;
        h5 {
            color: #be6361;
            font-family: DM Sans;
            font-size: 20px;
            font-weight: 700;
            margin-top: 4em;
        }
        h1 {
            font-family: Alfa Slab One;
            font-size: 72px;
            font-weight: 400;
            margin-bottom: 0;
        }
        h2 {
            font-family: Alfa Slab One;
            font-size: 56px;
            font-weight: 400;
            margin: 0;
            margin-bottom: 0.5em;
        }
        h3 {
            font-family: Alfa Slab One;
            font-size: 40px;
            font-weight: 400;
            margin-top: 1.2em;
        }
        h4 {
            font-family: DM Sans;
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            width: 23%;
            color: #33333380;
        }
        p {
            img {
                margin-right: 1em;
            }
            font-family: DM Sans;
            font-size: 16px;
            font-weight: 700;

            letter-spacing: 0px;
        }
        .plan-features {
            display: flex;
            .plan-item {
                width: 300px;
                padding: 0 35px;
                height: 60vh;
                border: 1px;
                margin: 1em;
                border-radius: 5px;
                h5 {
                    margin-top: 50px;
                }
            }
            .headers {
                display: flex;
                justify-content: space-between;
            }
            .price {
                display: flex;
            }
            #planItem1,
            #planItem3 {
                background-color: white;
                border: 1px solid #e5e5e5;
            }
            #planItem2 {
                h5, h3, h1, p {
                    color: white;
                }
                background-color: #be6361;
                border: 1px solid #a15352;
            }
        }
    }
</style>
