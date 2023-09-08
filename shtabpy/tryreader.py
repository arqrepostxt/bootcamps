import pandas as pd

# URL = 'http://raw.githubusercontent.com/BindiChen/machine-learning/master/data-analysis/027-pandas-convert-json/data/simple.json'
# df = pd.read_json(URL)

df = pd.read_json('no_header.json')
# df.info()
# print(df.head(2))
row_list = []
# print(type(df))
# print(df['ASSENTAMENTO:'])
print(list(df.row.values))

