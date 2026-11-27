// Pinpoint lender rules for the product transfer chat.
// Source: "Lender PT Rules Map" sheet, checked against lender broker sites 27/11/2026.
// Each key is the page slug, e.g. pinpoint.finance/nationwide-product-transfer
//   name     : lender name the client sees
//   lends    : 'resi' | 'btl' | 'both'  (decides whether the chat asks resi or BTL)
//   pt       : what the lender calls a product transfer
//   window   : how early a switch can be booked (plain English)
//   extras   : extra details this lender needs to find the account (asked after the basics, always optional)
//   btlGoTo  : for resi-only lenders, the slug of their BTL sister lender
//   resiGoTo : for BTL-only lenders, the slug of their residential sister lender
//   colour   : banner accent colour
//   note     : anything the chat must tell the client
window.PP_LENDERS = {
  'nationwide-product-transfer': {name:'Nationwide', lends:'resi', pt:'rate switch', window:'about 4 months before your deal ends (new rates always start on the 1st of a month)', extras:['your Nationwide mortgage account number','your date of birth'], btlGoTo:'tmw-rate-switch', colour:'#E4022D'},
  'tmw-rate-switch': {name:'The Mortgage Works', lends:'btl', pt:'rate switch', window:'13 weeks before your deal ends', extras:['the first 8 digits of your mortgage account number','your date of birth','the sort code your Direct Debit is paid from'], resiGoTo:'nationwide-product-transfer', colour:'#00A3AD'},
  'virgin-money-product-transfer': {name:'Virgin Money', lends:'both', pt:'product transfer', window:'4 months before your deal ends', extras:['your Virgin Money mortgage account number (it looks like 11111A-11111)'], colour:'#CC0000', note:'If there are more than 2 borrowers, or the mortgage is shared ownership or Help to Buy, Virgin Money handles the switch by phone.'},
  'clydesdale-product-transfer': {name:'Clydesdale Bank', lends:'both', pt:'product transfer', window:'about 4 months before your deal ends', extras:['your Clydesdale mortgage account number']},
  'halifax-product-transfer': {name:'Halifax', lends:'resi', pt:'product transfer', window:'4 months before your deal ends', extras:['your Halifax mortgage account number (it starts 10/)'], btlGoTo:'bm-solutions-product-transfer', colour:'#005EB8'},
  'lloyds-product-transfer': {name:'Lloyds Bank', lends:'resi', pt:'product transfer', window:'4 months before your deal ends', extras:['your Lloyds mortgage account number'], note:'Lloyds Bank does not yet let brokers switch existing Lloyds customers. We can still compare the market for you and help you switch with Lloyds when access opens in 2027.'},
  'scottish-widows-product-transfer': {name:'Scottish Widows Bank', lends:'resi', pt:'product transfer', window:'4 months before your deal ends', extras:['your Scottish Widows Bank mortgage account number']},
  'bm-solutions-product-transfer': {name:'BM Solutions', lends:'btl', pt:'product transfer', window:'4 months before your deal ends', extras:['your BM Solutions mortgage account number (it starts 60/)'], resiGoTo:'halifax-product-transfer'},
  'birmingham-midshires-product-transfer': {name:'Birmingham Midshires', lends:'btl', pt:'product transfer', window:'4 months before your deal ends', extras:['your mortgage account number (it starts 60/)']},
  'natwest-product-transfer': {name:'NatWest', lends:'both', pt:'product transfer', window:'4 months before your deal ends', extras:['your NatWest mortgage account number','your date of birth'], colour:'#5A287D'},
  'santander-product-transfer': {name:'Santander', lends:'both', pt:'product transfer', window:'just over 4 months before your deal ends', extras:['your date of birth'], colour:'#EC0000'},
  'barclays-product-transfer': {name:'Barclays', lends:'both', pt:'rate switch', window:'90 days before your deal ends', extras:['your Barclays mortgage account number'], colour:'#00AEEF'},
  'hsbc-product-switch': {name:'HSBC', lends:'both', pt:'product switch', window:'90 days before your deal ends', extras:['your HSBC mortgage account number'], colour:'#DB0011'},
  'tsb-rate-switch': {name:'TSB', lends:'both', pt:'rate switch', window:'3 months before your deal ends', extras:['your TSB mortgage account number']},
  'coventry-product-transfer': {name:'Coventry Building Society', lends:'both', pt:'product transfer', window:'4 months before your deal ends', extras:['your Coventry mortgage account number']},
  'leeds-product-transfer': {name:'Leeds Building Society', lends:'both', pt:'rate switch', window:'about 4 months before your deal ends', extras:['your Leeds mortgage account number','the date of birth of each borrower']},
  'skipton-product-transfer': {name:'Skipton Building Society', lends:'both', pt:'product transfer', window:'3 months before your deal ends', extras:['your Skipton mortgage account number']},
  'accord-product-transfer': {name:'Accord Mortgages', lends:'both', pt:'product transfer', window:'90 days before your deal ends', extras:['your 8 digit Accord mortgage account number']},
  'newcastle-product-transfer': {name:'Newcastle Building Society', lends:'both', pt:'product transfer', window:'3 months before your deal ends', extras:['your Newcastle mortgage account number']},
  'principality-product-transfer': {name:'Principality Building Society', lends:'both', pt:'rate switch', window:'4 months before your deal ends', extras:['your Principality mortgage account number','your date of birth']},
  'darlington-product-transfer': {name:'Darlington Building Society', lends:'both', pt:'product transfer', window:'about 3 months before your deal ends', extras:['the reference code on the letter Darlington sent you']},
  'furness-product-transfer': {name:'Furness Building Society', lends:'both', pt:'product transfer', window:'when your maturity pack arrives, about 16 weeks before your deal ends', extras:['your Furness mortgage account number','the switch number on your maturity pack']},
  'leek-product-transfer': {name:'Leek Building Society', lends:'both', pt:'product transfer', window:'about 4 months before your deal ends', extras:['your Leek mortgage account number']},
  'melton-product-transfer': {name:'Melton Building Society', lends:'both', pt:'product transfer', window:'3 months before your deal ends', extras:['your Melton mortgage account number']},
  'newbury-product-transfer': {name:'Newbury Building Society', lends:'both', pt:'product switch', window:'4 months before your deal ends', extras:['your Newbury mortgage account number']},
  'tipton-product-transfer': {name:'Tipton & Coseley Building Society', lends:'both', pt:'product transfer', window:'ahead of your deal ending', extras:['your Tipton mortgage account number'], note:'Tipton needs a short authority form signed by you before we can act. We will send it over.'},
  'vernon-product-transfer': {name:'Vernon Building Society', lends:'both', pt:'product transfer', window:'ahead of your deal ending', extras:['your Vernon mortgage account number'], note:'Vernon needs a short authority form signed by you before we can act. We will send it over.'},
  'kent-reliance-product-transfer': {name:'Kent Reliance', lends:'btl', pt:'product transfer', window:'3 months before your deal ends', extras:['your Kent Reliance mortgage account number (it starts 08 or 7)'], note:'Kent Reliance needs a form signed by every borrower by hand.'},
  'precise-product-transfer': {name:'Precise Mortgages', lends:'both', pt:'product transfer', window:'3 months before your deal ends', extras:['the personalised quote Precise sent you, if you have it'], note:'Precise needs your permission by phone or a signed letter of authority before we can see your options.'},
  'paragon-product-switch': {name:'Paragon', lends:'btl', pt:'product switch', window:'6 months before your deal ends', extras:['your Paragon mortgage account number']},
  'kensington-product-transfer': {name:'Kensington', lends:'both', pt:'product transfer', window:'about 4 months before your deal ends', extras:['your Kensington mortgage account number','your date of birth']},
  'aldermore-product-switch': {name:'Aldermore', lends:'both', pt:'product switch', window:'17 weeks before your deal ends', extras:['your Aldermore mortgage account number']},
  'pepper-product-transfer': {name:'Pepper Money', lends:'resi', pt:'product transfer', window:'3 months before your deal ends', extras:['your Pepper Money mortgage account number']},
  'bluestone-product-transfer': {name:'Bluestone Mortgages', lends:'resi', pt:'product transfer', window:'ahead of your deal ending', extras:['your Bluestone mortgage account number']},
  'vida-product-transfer': {name:'Vida Homeloans', lends:'both', pt:'product switch', window:'6 months before your deal ends', extras:['your Vida mortgage account number']},
  'tml-product-transfer': {name:'The Mortgage Lender', lends:'both', pt:'product transfer', window:'ahead of your deal ending', extras:['your TML mortgage account number']},
  'bank-of-ireland-product-transfer': {name:'Bank of Ireland', lends:'both', pt:'product transfer', window:'6 months before your deal ends', extras:['your Bank of Ireland mortgage account number']},
  'co-op-product-transfer': {name:'Co-operative Bank (Platform)', lends:'both', pt:'product switch', window:'ahead of your deal ending', extras:['your Co-op or Platform mortgage account number']},
  'metro-bank-rate-switch': {name:'Metro Bank', lends:'both', pt:'rate switch', window:'3 months before your deal ends', extras:['your Metro Bank mortgage account number (8 digits starting with 4)']},
  'keystone-product-transfer': {name:'Keystone Property Finance', lends:'btl', pt:'product transfer', window:'ahead of your deal ending', extras:['your Keystone mortgage account number']},
  'landbay-product-transfer': {name:'Landbay', lends:'btl', pt:'product transfer', window:'90 days before your fixed rate ends', extras:['your Landbay mortgage account number'], note:'If another broker arranged your Landbay mortgage, Landbay will ask you to confirm online that we can act for you.'},
  'gen-h-product-switch': {name:'Gen H', lends:'resi', pt:'product switch', window:'towards the end of your fixed rate', extras:['your Gen H mortgage account number']}
};
