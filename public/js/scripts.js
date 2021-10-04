const switchView = function (e) {
    if (e.target.id === 'table-nav') {
        document.getElementById('table-root').style.display = 'flex';
        document.getElementById('sentence-root').style.display = 'none';
    } else {
        document.getElementById('table-root').style.display = 'none';
        document.getElementById('sentence-root').style.display = 'flex';
    }
}

window.onload = function () {
    const tableLink = document.getElementById('table-nav')
    const sentenceLink = document.getElementById('sentence-nav')
    tableLink.onclick = switchView;
    sentenceLink.onclick = switchView;

    ReactDOM.render(React.createElement(ParentElement, null), document.getElementById('main-body-container'));
}