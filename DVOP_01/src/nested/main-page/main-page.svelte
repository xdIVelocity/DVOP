<div class="top-main">
    <div class="main-left">
        <h4>Delectus instructior</h4>
        <h1>Vide legimus consectetuer</h1>
        <div id="submit-field">
            <input type="text" placeholder="Email" />
            <button id="submitButton"> Submit </button>
        </div>
    </div>
    <img src="/Images/marginalia-productive-work.svg" alt="" />
    <div class="main-right" />
</div>

<style lang="scss">
    .top-main {
        display: block;
        width: 80%;
        margin: 10vh 10%;
        display: flex;
        justify-content: space-between;
        .main-left {
            margin: 0;
            padding: 0;
            h4 {
                font-family: DM Sans;
                font-size: 20px;
                font-weight: 700;
            }
            h1 {
                font-family: Alfa Slab One;
                font-size: 72px;
                font-weight: 400;
                line-height: 80px;
            }
        }
        #submit-field {
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-between;
            input {
                padding: 1em 2.5em;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
                margin-right: 2em;
                font-family: DM Sans;
                font-size: 16px;
                font-weight: 400;
                text-align: left;
            }
            #submitButton {
                width: 15em;
                padding: 0.8em 0;
                border: 1px black solid;
                border-radius: 5px;
                font-family: DM Sans;
                font-size: 16px;
                font-weight: 700;
            }
        }
    }
</style>
