import json
from flask import Flask, request
from main import Job_recog
from flask_cors import CORS
from flasgger import Swagger

app = Flask(__name__)
CORS(app)

# Initialize Swagger object
swagger = Swagger(app)

@app.route('/get_jobs', methods=['POST'])
def job_rec():
    """
    Endpoint to get jobs based on color and music parameters.
    ---
    parameters:
      - name: color
        in: query
        type: string
        required: true
        description: The color parameter.
      - name: music
        in: query
        type: string
        required: true
        description: The music parameter.
    responses:
      200:
        description: A JSON object containing job information, personality types based on music and color.
    """
    music_pars = request.args.get('music')
    color_pars = request.args.get('color')
    model = Job_recog()
    json_output = model.run(color_pars, music_pars)
    return json.dumps(json_output)


@app.route('/get_jobs_by_type', methods=['POST'])
def job_rec_by_type():
    """
    Endpoint to get jobs by job type.
    ---
    parameters:
      - name: type
        in: query
        type: string
        required: true
        description: The job type parameter.
    responses:
      200:
        description: A JSON object containing job information.
    """
    type_pars = request.args.get('type')
    model = Job_recog()
    json_output = model.runByType(type_pars)
    return json.dumps(json_output)


