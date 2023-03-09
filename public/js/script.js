let loadingLogo = document.querySelector(`.loading-logo`);
let formLogo = document.querySelector(`.form-logo`);

setTimeout(() => {
    loadingLogo.innerHTML = ``;
    formLogo.innerHTML = `
    <form action="/user" method="post">
        <label class="form-label">
            Ваше имя
            <input type="text" name="username" class="mt-2 form-control bg-secondary">
        </label>
        <button type="submit" class="mt-3 btn btn-primary">Продолжить</button>
    </form>`;
}, 4000);