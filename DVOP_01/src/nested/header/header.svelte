<div class="header">
    <div id="logoHeader">LOGO</div>
    <div id="midHeader">
        <h4>Portfolio</h4>
        <h4>Contact</h4>
    </div>
    <div id="headerButton">
        <button> Sign up </button>
    </div>
</div>

<style lang="scss">
    .header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        #logoHeader {
            font-family: Alfa Slab One;
            font-size: 40px;
            font-weight: 400;
            letter-spacing: 0px;
        }
        #midHeader {
            display: flex;
            font-family: DM Sans;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0px;
            text-align: center;
            h4:first-of-type {
                margin-right: 2em;
            }
        }
        #headerButton {
            button {
                padding: 1em 4em;
                background-color: #ff8482;
                border: 0.2px solid white;
                border-radius: 0.3em;
                color: white;
                font-family: DM Sans;
                font-size: 16px;
                font-weight: 700;
                transition-duration: 0.4s;
            }
            button:hover {
                background-color: white;
                color: #ff8482;
            }
        }
    }
</style>