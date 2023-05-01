import pandas as pd
pd.set_option('display.max_rows', 100)
from sklearn.metrics.pairwise import cosine_similarity
from collections import Counter
import plotly.express as px

class Job_recog():
    def __init__(self):
        # Define the datasets
        self.job = pd.read_csv('./data/clean_job.csv',index_col=0)
        self.music = pd.read_csv('./data/clean_music.csv',index_col=0)
        self.colors = pd.read_csv('./data/clean_colors.csv',index_col=0)
        
        # Define the cosine_similarity
        self.color_similarity = cosine_similarity(self.colors[self.colors.columns[2:]])
        self.music_similarity = cosine_similarity(self.music[self.music.columns[2:]])
        self.job_similarity = cosine_similarity(self.job[self.job.columns[2:]])
        

    def find_color_similarity(self,title,data): # method for finding color similarity
        colors_id = data[data['name'] == title].index.values[0]       
        score = list(enumerate(self.color_similarity[colors_id]))
        
        sorted_score = sorted(score, key=lambda x:x[1], reverse= True)[1:]
        personality_list = []
        name_list = [] 
        for i,val in enumerate(sorted_score):
            name_list.append(data[data.index == val[0]]['name'].values[0])
            personality_list.append(data[data.index == val[0]]['personality_type'].values[0])
            if i == 2: break
        return name_list, personality_list
    
    def find_music_similarity(self,title,data):# method for finding music similarity
        colors_id = data[data['name'] == title].index.values[0]       
        score = list(enumerate(self.music_similarity[colors_id]))
        
        sorted_score = sorted(score, key=lambda x:x[1], reverse= True)[1:]
        personality_list = []
        name_list = [] 
        for i,val in enumerate(sorted_score):
            name_list.append(data[data.index == val[0]]['name'].values[0])
            personality_list.append(data[data.index == val[0]]['personality_type'].values[0])
            if i == 2: break
        return name_list, personality_list
    
    def find_job_similarity(self,title,data):# method for finding job similarity
        colors_id = data[data['personality_type'] == title].index.values[0]       
        score = list(enumerate(self.job_similarity[colors_id]))
        
        sorted_score = sorted(score, key=lambda x:x[1], reverse= True)[1:]
        personality_list = []
        name_list = [] 
        for i,val in enumerate(sorted_score):
            name_list.append(data[data.index == val[0]]['name'].values[0])
            personality_list.append(data[data.index == val[0]]['personality_type'].values[0])
            if i == 2: break
        return name_list, personality_list
    
    def run(self,color, music):
        # First find color
        color_name, color_personality = self.find_color_similarity(color,self.colors)
        # print('Probably your color is: ',Counter(color_personality).most_common(1)[0][0])
        # print(f"Also, we recommend you this colors: {color_name}\n")

        # Second find music
        music_name, music_personality = self.find_music_similarity(music,self.music)
        # print('Probably your music is: ',Counter(music_personality).most_common(1)[0][0])
        # print(f"Also we recommend you this music genre: {music_name}\n")
        
        personalities = Counter(music_personality + color_personality).most_common(2)
        
        job_rec_list = {}
        for personality in personalities:
            job_name, job_personality = self.find_job_similarity(personality[0],self.job)
            # print(f'for this type of personality "{job_personality[0]}" our job recommendation: {job_name}')
            job_rec_list[job_personality[0]] = job_name
        # job_name, job_personality = self.find_similarity(test1,self.job,self.job_similarity,'personality_type')
        
        res_dict = {
            "color_mbti":Counter(color_personality).most_common(1)[0][0],
            "color_rec":color_name,
            "music_mbti":Counter(music_personality).most_common(1)[0][0],
            "music_rec":music_name,
            "job_rec":job_rec_list
        }
        return res_dict
    def runByType(self,type):
       
        job_name, job_personality = self.find_job_similarity(type,self.job)
        print(f'for this type of personality "{type}" our job recommendation: {job_name}')
        print(job_name)
        job_rec_list = {}
        job_rec_list[type] = job_name
        # job_name, job_personality = self.find_similarity(test1,self.job,self.job_similarity,'personality_type')
        res_dict = {
            
            "job_rec":job_rec_list
        }
        
        return res_dict
    

if __name__=="__main__":
    test1 = Job_recog()
    test1.run('Black','Electronicore')
    test1.runByType('ESFP')
    # test1.run('Blue','Emo')