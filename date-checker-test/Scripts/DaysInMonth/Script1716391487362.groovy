import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

WebUI.openBrowser('')

WebUI.navigateToUrl('https://date-checker-kappa.vercel.app/')

// Test for months with 31 days
def monthsWith31Days = [1, 3, 5, 7, 8, 10, 12]

monthsWith31Days.each({ 
        def result = WebUI.executeJavaScript("return DaysInMonth($it, 2022);", null)

        WebUI.verifyMatch(result.toString(), '31', false)
    })

// Test for months with 30 days
def monthsWith30Days = [4, 6, 9, 11]

monthsWith30Days.each({ 
        def result = WebUI.executeJavaScript("return DaysInMonth($it, 2022);", null)

        WebUI.verifyMatch(result.toString(), '30', false)
    })

// Test for February in a common year
def result = WebUI.executeJavaScript('return DaysInMonth(2, 2022);', null)

WebUI.verifyMatch(result.toString(), '28', false)

// Test for February in a leap year
result = WebUI.executeJavaScript('return DaysInMonth(2, 2020);', null)

WebUI.verifyMatch(result.toString(), '29', false)

WebUI.closeBrowser()

