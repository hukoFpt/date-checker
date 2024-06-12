import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

WebUI.openBrowser('')
WebUI.navigateToUrl('http://localhost:3000/')

WebUI.click(findTestObject("Object Repository/Page/button_Clear"))
WebUI.setText(findTestObject('Object Repository/Page/input_Day'), '29')
WebUI.setText(findTestObject('Object Repository/Page/input_Month'), '2')
WebUI.setText(findTestObject('Object Repository/Page/input_Year'), '2021')
WebUI.click(findTestObject('Object Repository/Page/button_Check'))
String alertMessage = WebUI.getAlertText()
WebUI.verifyMatch(alertMessage, '29/2/2021 is NOT a valid date', false)

WebUI.closeBrowser()