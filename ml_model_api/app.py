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
    model = Job_recog()
    json_output = model.run(color_pars, music_pars)
    return json.dumps(json_output)


@app.route('/get_jobs_by_type', methods=['POST'])

def job_rec_by_type():
    type_pars = request.args.get('type')
    model = Job_recog()
    json_output = model.runByType(type_pars)
    return json.dumps(json_output)