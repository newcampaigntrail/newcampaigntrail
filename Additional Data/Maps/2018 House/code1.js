e=campaignTrail_temp

e.credits = "Decstar"

e.election_json =   [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2018,
            "summary": "<p>Placeholder</p>",
            "image_url": "https://cdn.discordapp.com/attachments/810034515334004766/1054240418096758924/election_pic.png",
            "winning_electoral_vote_number": 218,
            "advisor_url": "https://cdn.discordapp.com/attachments/810034515334004766/1054240418470047767/election_advisors.png",
            "recommended_reading": "Placeholder",
            "has_visits": 0,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
]

e.temp_election_list = [
    {
      "id": 20, 
      "year": 2018, 
      "is_premium": 0, 
      "display_year": "2018House"
    }
]

e.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
          200,
          201,
          202
        ]
    }
]

e.opponents_weighted_json = [
    {
      "election": 20,
      "candidates": [
        200,
        201,
        202
      ]
    }
]

e.running_mate_json = [
    {
      "model": "campaign_trail.running_mate",
      "pk": 106,
      "fields": {
        "candidate": 200,
        "running_mate": 205
      }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 106,
        "fields": {
          "candidate": 201,
          "running_mate": 204
        }
      }
]



e.candidate_json = [
    {
      "model": "campaign_trail.candidate",
      "pk": 200,
      "fields": {
        "first_name": "",
        "last_name": "Democrats",
        "election": 20,
        "party": "Democratic",
        "state": "D.C.",
        "priority": 1,
        "description": "<p>Placeholder</p>",
        "color_hex": "#5e76b5",
        "secondary_color_hex": "#5e76b5",
        "is_active": 1,
        "image_url": "https://cdn.discordapp.com/attachments/810034515334004766/1054239161890119710/candidate_dem.png",
        "electoral_victory_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
        "electoral_loss_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
        "no_electoral_majority_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
        "description_as_running_mate": null,
        "candidate_score": 1.0
      }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 201,
        "fields": {
          "first_name": "",
          "last_name": "Republicans",
          "election": 20,
          "party": "Republican",
          "state": "D.C.",
          "priority": 1,
          "description": "<p>Placeholder</p>",
          "color_hex": "#8e2929",
          "secondary_color_hex": "#8e2929",
          "is_active": 1,
          "image_url": "https://cdn.discordapp.com/attachments/810034515334004766/1054239161256771604/candidate_rep.png",
          "electoral_victory_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "electoral_loss_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "no_electoral_majority_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "description_as_running_mate": null,
          "candidate_score": 1.0
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 202,
        "fields": {
          "first_name": "",
          "last_name": "Other",
          "election": 20,
          "party": "Other",
          "state": "Belfast",
          "priority": 1,
          "description": "<p>Placeholder</p>",
          "color_hex": "#41913b",
          "secondary_color_hex": "#41913b",
          "is_active": 0,
          "image_url": "https://cdn.discordapp.com/attachments/810034515334004766/1053579302769270814/kim_il-sung.png",
          "electoral_victory_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "electoral_loss_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "no_electoral_majority_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "description_as_running_mate": null,
          "candidate_score": 1.0
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 204,
        "fields": {
          "first_name": "Paul",
          "last_name": "Ryan",
          "election": 20,
          "party": "Republican",
          "state": "Wisconsin",
          "priority": 1,
          "description": null,
          "color_hex": "#e7ed74",
          "secondary_color_hex": "#e7ed74",
          "is_active": 0,
          "image_url": "https://cdn.discordapp.com/attachments/810034515334004766/1054239161600720966/candidate_ryan.png",
          "electoral_victory_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "electoral_loss_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "no_electoral_majority_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "description_as_running_mate": "<p>Placeholder</p>",
          "candidate_score": 1.0
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 205,
        "fields": {
          "first_name": "Nancy",
          "last_name": "Pelosi",
          "election": 20,
          "party": "Democratic",
          "state": "California",
          "priority": 1,
          "description": null,
          "color_hex": "#e7ed74",
          "secondary_color_hex": "#e7ed74",
          "is_active": 0,
          "image_url": "https://cdn.discordapp.com/attachments/810034515334004766/1054239160862515230/candidate_pelosi.png",
          "electoral_victory_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "electoral_loss_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "no_electoral_majority_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
          "description_as_running_mate": "<p>Placeholder</p>",
          "candidate_score": 1.0
        }
    }
]

e.global_parameter_json = [
    {
      "model": "campaign_trail.global_parameter",
      "pk": 1,
      "fields": {
        "vote_variable": 1.125,
        "max_swing": 0.12,
        "start_point": 0.94,
        "candidate_issue_weight": 10,
        "running_mate_issue_weight": 3,
        "issue_stance_1_max": -0.71,
        "issue_stance_2_max": -0.3,
        "issue_stance_3_max": -0.125,
        "issue_stance_4_max": 0.125,
        "issue_stance_5_max": 0.3,
        "issue_stance_6_max": 0.71,
        "global_variance": 0.01,
        "state_variance": 0.005,
        "question_count": 25,
        "default_map_color_hex": "#C9C9C9",
        "no_state_map_color_hex": "#999999"
      }
    }
  ]