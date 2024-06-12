import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

WebUI.openBrowser('')
WebUI.navigateToUrl('http://localhost:3000/')

WebUI.click(findTestObject("Object Repository/Page/button_Clear"))
WebUI.setText(findTestObject('Object Repository/Page/input_Day'), '-1')
WebUI.setText(findTestObject('Object Repository/Page/input_Month'), '1')
WebUI.setText(findTestObject('Object Repository/Page/input_Year'), '2022')
WebUI.click(findTestObject('Object Repository/Page/button_Check'))
String alertMessage = WebUI.getAlertText()
WebUI.verifyMatch(alertMessage, 'Input data for Day is incorrect format', false)

WebUI.closeBrowser()