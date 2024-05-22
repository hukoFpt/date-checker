import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
WebUI.openBrowser('')
WebUI.navigateToUrl('http://localhost:3000/')
def result = WebUI.executeJavaScript("return DaysInMonth(2, 2020);", null)
WebUI.verifyMatch(result.toString(), '29', false)
WebUI.closeBrowser()