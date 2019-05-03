export const enum BrowserProxyMessageTypes {
    execute = 'BrowserProxy/EXEC',
    response = 'BrowserProxy/RESPONSE',
    exception = 'BrowserProxy/EXCEPTION',
}

export const enum BrowserProxyPlugins {
    getPlugin = 'getPlugin',
}

export const enum BrowserProxyActions {
    refresh = 'refresh',
    click = 'click',
    execute = 'execute',
    executeAsync = 'executeAsync',
    gridProxyDetails = 'gridProxyDetails',
    url = 'url',
    newWindow = 'newWindow',
    waitForExist = 'waitForExist',
    waitForVisible = 'waitForVisible',
    isVisible = 'isVisible',
    moveToObject = 'moveToObject',
    getTitle = 'getTitle',
    clearElement = 'clearElement',
    keys = 'keys',
    elementIdText = 'elementIdText',
    elements = 'elements',
    getValue = 'getValue',
    setValue = 'setValue',
    selectByIndex = 'selectByIndex',
    selectByValue = 'selectByValue',
    selectByName = 'selectByName',
    selectByVisibleText = 'selectByVisibleText',
    getAttribute = 'getAttribute',
    windowHandleMaximize = 'windowHandleMaximize',
    isEnabled = 'isEnabled',
    scroll = 'scroll',
    alertAccept = 'alertAccept',
    alertDismiss = 'alertDismiss',
    alertText = 'alertText',
    dragAndDrop = 'dragAndDrop',
    frame = 'frame',
    frameParent = 'frameParent',
    getCookie = 'getCookie',
    deleteCookie = 'deleteCookie',
    getHTML = 'getHTML',
    getCurrentTabId = 'getCurrentTabId',
    switchTab = 'switchTab',
    close = 'close',
    getTabIds = 'getTabIds',
    window = 'window',
    windowHandles = 'windowHandles',
    getTagName = 'getTagName',
    isSelected = 'isSelected',
    getText = 'getText',
    elementIdSelected = 'elementIdSelected',
    timeoutsAsyncScript = 'timeoutsAsyncScript',
    makeScreenshot = 'makeScreenshot',
    uploadFile = 'uploadFile',
    end = 'end',
    kill = 'kill',
    getCssProperty = 'getCssProperty',
    getSource = 'getSource',
}
