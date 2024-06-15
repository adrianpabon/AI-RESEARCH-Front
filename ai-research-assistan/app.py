from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import openai
import os
from dotenv import load_dotenv
import ssl 

# Load environment variables from .env file
load_dotenv()

# Verify API key
api_key = os.getenv('OPENAI_API_KEY')
#print(f"API Key: {api_key}")  # Verify if API key is loading

if not api_key:
    raise ValueError("No API key found in environment variables")

# Set OpenAI API key
openai.api_key = api_key

app = Flask(__name__)
CORS(app) # Enable CORS for all routes and all origins

@app.route('/api/get_response', methods=['POST'])
@cross_origin()  # This will ensure the Access-Control-Allow-Origin header is sent
def get_response():
    data = request.json
    prompt = data.get("prompt", "")
    print(f"Received prompt: {prompt}")  # Debug logging
    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=150
        )
        response_content = response.to_dict()['choices'][0]['message']['content']
        print(f"API response: {response_content}")  # Debug logging
        return jsonify({"response": response_content})
    except Exception as e:
        print(f"Error: {e}")  # Debug logging
        return jsonify({"error": str(e)}), 500
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True)
