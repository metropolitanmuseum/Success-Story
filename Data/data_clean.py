import pandas as pd 
import numpy as np
from time import time

data = pd.read_csv('openaccess/MetObjects.csv')

columns_to_keep = ["Object Number",
				   "Object ID",
				   "Department",
				   "Object Name",
				   "Title",
				   "Culture",
				   "Artist Display Name",
				   "Artist Nationality",
				   "Artist Begin Date",
				   "Artist End Date",
				   "Object Begin Date",
				   "Object End Date",
				   "Credit Line",
				   "Country",
				   "Classification"]

data = data[columns_to_keep]

pd.options.display.max_colwidth = 200

data['Acquisition Date from Credit Line'] = data['Credit Line'].str.extract('((?<![\.|\d])[1-2][089][0-9]{2}(?!\d))')
data['Acquisition Date from Object Number, First Phase'] = np.vectorize(lambda x: x.split(".")[0])(data['Object Number'])
data['Acquisition Date from Object Number, Second Phase'] = data['Object Number'].str.extract('([1-2][089][0-9]{2}(?!\d))')

data['Acquisition Date from Object Number, Second Phase'] = np.vectorize(lambda x: np.float(x))(data['Acquisition Date from Object Number, Second Phase'])


data['Acquisition Date from Object Number, First Phase Adjusted'] = np.vectorize(lambda x: "19" + x if len(x) == 2 else x)(data['Acquisition Date from Object Number, First Phase'])

data['Acquisition Date'] = data['Acquisition Date from Credit Line']
data['Acquisition Date'].fillna(data['Acquisition Date from Object Number, First Phase Adjusted'], inplace = True)

data['Acquisition Date'] = pd.to_numeric(data['Acquisition Date'], errors='coerce')
data['Acquisition Date'].fillna(data['Acquisition Date from Object Number, Second Phase'], inplace = True)

data['Acquisition Type'] = data['Credit Line'].str.upper().str.extract('(GIFT|PURCHASE|BEQUEST|FUND|LOAN|MUSEUM ACCESSION|LENT|JOINTLY OWNED|MEMORY|ARCHIVE|ACQUISITION|COLLECTION)')

data.to_csv("MET_v2.csv", index = False)