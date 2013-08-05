// Copyright (c) 2013, Web Notes Technologies Pvt. Ltd.
// License: GNU General Public License v3. See license.txt

wn.query_reports["Accounts Payable"] = {
	"filters": [
		{
			"fieldname":"company",
			"label": "Company",
			"fieldtype": "Link",
			"options": "Company",
			"default": wn.defaults.get_default("company")
		},
		{
			"fieldname":"account",
			"label": "Account",
			"fieldtype": "Link",
			"options": "Account",
			"get_query": function() {
				var company = wn.query_report.filters_by_name.company.get_value();
				return {
					"query": "accounts.utils.get_account_list", 
					"filters": {
						"is_pl_account": "No",
						"debit_or_credit": "Credit",
						"company": company,
						"master_type": "Supplier"
					}
				}
			}
		},
		{
			"fieldname":"report_date",
			"label": "Date",
			"fieldtype": "Date",
			"default": get_today()
		},
		{
			"fieldname":"ageing_based_on",
			"label": "Ageing Based On",
			"fieldtype": "Select",
			"options": 'Posting Date' + NEWLINE + 'Due Date',
			"default": "Posting Date"
		}
	]
}