import json
from flask import Flask, request
from main import Job_recog
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/get_jobs', methods=['POST'])

def job_rec():
    music_pars = request.args.get('music')
    color_pars = request.args.get('color')
    type_pars = request.args.get('type')
    
    
    model = Job_recog()
    if type_pars is not None and type_pars.strip() != '':
        json_output = model.runByType(type_pars)
    else:
        json_output = model.run(color_pars, music_pars)
    return json.dumps(json_output)


app.run()