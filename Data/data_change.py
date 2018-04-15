import numpy as np 
import pandas as pd 
import matplotlib.pylab as plt

data = pd.read_csv("MET_v2.csv")

# Plus vieux : Egyptian Art, Greek and Roman Art, Arms and Armor, Medieval Art
# Plus récent : Photographs, Costume Institute, Modern and Contemporary Art, Arts of Africa, Oceania and the Americas

old_departments = ["Egyptian Art", "Greek and Roman Art", "Arms and Armor", "Medieval Art"]
new_departments = ["Photographs", "Costume Institute", "Modern and Contemporary Art", "Arts of Africa, Oceania, and the Americas"]

creation_data = pd.DataFrame({"Années" : np.arange(1870, 2018, 1)})

# Department = data.Department.unique()
for classif in old_departments + new_departments:
	data_classif = data.loc[(data.Department == classif) & (data['Acquisition Date'] != 2018), 'Acquisition Date']
	data_classif[data_classif < 1870] = 1870
	data_classif[data_classif > 2018] = 2017
	Entrees = data_classif.value_counts()
	Annees = Entrees.index
	temp_axis = np.arange(1870, 2018, 1)
	missing_years = [years for years in [(years not in Annees)*years*1. for years in temp_axis] if years > 0]
	missing_tickets = list(np.zeros(len(missing_years)))
	final_years = list(Annees) + missing_years
	final_tickets = list(Entrees) + missing_tickets
	donnees = pd.DataFrame({'Annees' : final_years, 'Entrees' : final_tickets})
	donnees = donnees.sort_values(by = 'Annees')


	# boolean = (donnees.Annees >= 1870) & (donnees.Annees <= 2017)
	maxi = np.sum(donnees.Entrees)
	creation_data[classif + ": Entrees"] = list(np.cumsum(donnees.Entrees))
	creation_data[classif + ": %"] = list(np.cumsum(donnees.Entrees)/maxi)
	
	# plt.plot(donnees.Annees[boolean], np.cumsum(donnees.Entrees[boolean])/maxi, label = classif)
	# plt.title("Évolution du nombre d'entrées des œuvres du département " +
	# 		  classif +
	# 		  " dans l'histoire du MET")

for classif in old_departments:
	plt.plot(creation_data["Années"], creation_data[classif + ": %"]*100, label = classif)
plt.title("Pourcentage du nombre d'œuvres total acquis : Anciens départements")
plt.legend()
plt.xlabel("Années")
plt.ylabel("%")
plt.show()

for classif in new_departments:
	plt.plot(creation_data["Années"], creation_data[classif + ": %"]*100, label = classif)
plt.legend()
plt.title("Pourcentage du nombre d'œuvres total acquis : Départements récents")
plt.xlabel("Années")
plt.ylabel("%")
plt.show()

creation_data.to_csv("Data_for_graphs.csv")

Entrees = data.loc[(data['Acquisition Date'] >= 2008) & (data['Acquisition Date'] <= 2017), "Acquisition Date"].value_counts()
Annees = Entrees.index
donnees = pd.DataFrame({'Annees' : Annees, 'Entrees' : Entrees})
donnees = donnees.sort_values(by = 'Annees')

plt.bar(donnees.Annees, donnees.Entrees)
plt.title("Évolution du nombre d'entrées entre 2008 et 2017")
plt.xlabel("Temps")
plt.ylabel("Nombre d'entrées des œuvres")
plt.show()
