<script>
    async function getMe() {
        const me_data = await fetch("http://localhost:3000/me");
        const user = await me_data.json();

        return user;
    }
</script>

<div class="header container-lg">
    <div class="title">
        <h1>My Digital Library</h1>
        <div class="subtext">
            The new way for you to keep track of your books.
        </div>
    </div>

    <div class="login-controls">
        <div class="user-info">
            {#await getMe() then userData}
                {(console.log(userData), "")}
                <img id="avatar" src={userData.avatar_url} alt="avatar" />
                <div id="username">{userData.name}</div>
            {/await}
        </div>
        <button
            type="button"
            class="btn btn-secondary"
            id="logout-link"
            onclick="window.location.href='http://localhost:3000/logout';"
            >Logout
        </button>
    </div>
</div>

<style>
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2em;
    }

    .title {
        display: flex;
        flex-direction: column;
    }

    .login-controls {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
    }

    .user-info {
        display: flex;
        flex-direction: row;
        font-size: 2em;
        align-items: center;
        margin: 20px;
    }

    .user-info img {
        height: 40px;
        width: 40px;
        border-radius: 50% !important;
    }
</style>
