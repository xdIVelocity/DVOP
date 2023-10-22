<script>
    import Header from "../nested/header/header.svelte";
    import MainPage from "../nested/main-page/main-page.svelte";
    import SecondPart from "../nested/main-second/second-part.svelte";
    import Footer from "../nested/footer/footer.svelte";
    import ActuallFooter from "../nested/actuall-footer/actuall-footer.svelte";
    import MiddlePart from "../nested/middle-part/middle-part.svelte";
    import Features from "../nested/features/features.svelte";
    import Plans from "../nested/plans/plans.svelte";
</script>

<body style="margin: 0">
    <div class="main">
        <div class="top-content">
            <Header />
            <MainPage />
        </div>
        <div class="second-content">
            <SecondPart />
        </div>
        <div class="middle">
            <MiddlePart/>
        </div>
        <div class="features">
            <Features/>
        </div>
        <div class="subscription-plans">
            <Plans/>
        </div>
        <div class="footer">
            <Footer/>
        </div>
        <ActuallFooter/>
    </div>
    
</body>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=DM+Sans:opsz,wght@9..40,600&display=swap");

    * {
        margin: 0px;
        padding: 0px;
    }
    .main {
        display: flex;
        flex-direction: column;
        .top-content {
            color: white;
            width: 100%;
            height: 100%;
            min-height: 100vh;
            background: #ff8482;
        }
        .second-content {
            width: 100%;
            height: 100%;
            min-height: 100vh;
            background: #fff2dd;
            color: #333333;
        }
        .middle{
            color: white;
            height: fit-content;
            background: url(Images/court.svg);
            background-repeat: no-repeat;
            background-size: cover;
        }
        .features{
            color: #333333;
            height: 100%;
            width: 100%;
            min-height: 100vh;
            align-content: center;
            display: flex;
        }
        .subscription-plans{
            min-height: 100vh;
            width: 100%;
            background: #FFF2DD;
            color:#333333;

        }

        .footer{
            background: #BE6361;
            width: 100%;
            height: 100%;
            min-height:calc(100vh - 4em);
            color: white;
        }
    }
</style>
