//Assignment of Capital Float : 
=== > login page with user name and password. Then OTP section with OTP validation. On success, go to welcome page. Failure, say Sorry, please provide valid details as single message for user name and password. OTP error msg : "Wrong OTP, please try again". And show login section.

welcome page : Have three side links. Show when user clicks them.
User info : Show user info here

Contact info : Show contact info here

Finance info : Show finance info here

Additional info page : Show all of the following details with a small button for printing the data in PDF.

PDF should have the name, father name, mobile number on top.

savings instruments,
prepaid balance,
loan records,
bank statements,
water bill history,
Remmitance,
Insurance,
OtherBankComfortLetter,
Electricity bills.

loans page (Hide and show some of meta data if required and also employment data here).

define variables : 

USERINFO section:
userInfo = user_info;(Might not be required);
PersonalInfo = user_info.PersonalInfo;
WorkExperience = user_info.WorkExperience;
LicenseIds = user_info.LicenseIds;

additionalDetails SECTION : 
additionalDetails = additional_details;
SavingsInstruments = additional_details.SavingsInstruments (It is array).
PrePaidBalance = additional_details.PrePaidBalance;
LoanRecords = additional_details.LoanRecords;
BankStatements = additional_details.BankStatements;
WaterBill = additional_details.WaterBill;
Remittances = additional_details.Remittances;
Insurance = additional_details.Insurance;
OtherBankComfortLetter = additional_details.OtherBankComfortLetter;
ElectricityBill = additional_details.ElectricityBill;

contact_info SECTION:

contactInfo : contact_info;
permanentAddress = contact_info.permanentAddress;
isPermanentAddressSameAsPresentAddress = contact_info.isPermanentAddressSameAsPresentAddress;
previousAddress = contact_info.previousAddress;
currentAddress = contact_info.currentAddress;

finance_info SECTION:
financeInfo : finance_info;

signup : signup

extra : extra
permanentAddress = extra.permanentAddress;
loan_req_details = extra.loan_req_details;
metadata = extra.metadata;