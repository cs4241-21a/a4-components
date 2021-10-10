import React from 'react'
import {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="form">
                <form action="" id="entryform">
                    <label for="yourname">Your name here: </label>
                    <input type="text" class="form-control" id="yourname" value="" />
                    <br/>
                    <label for="year">Year of Gradutation: </label>
                    <select id="year" class="form-control" name="Grad Year" size={1}>
                        <option value={2022}>2022</option>
                        <option value={2023}>2023</option>
                        <option value={2024}>2024</option>
                        <option value={2025}>2025</option>
                        <option value={2026}>2026</option>
                    </select>
                    <br/>
                    <label for="major1">Your Major: </label>
                    <select id="major1" class="form-control" name="Major" size={1}>
                        <option value="IMGD-Art">IMGD-Art</option>
                        <option value="IMGD-Tech">IMGD-Tech</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Robotics Engineering">Robotics Engineering</option>
                        <option value="Aerospace Engineering">Aerospace Engineering</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Chemical Engineering">Chemical Engineering</option>
                        <option value="Biochemical Engineering">Biochemical Engineering</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="Physics">Physics</option>
                        <option value="Business">Business</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/>
                    <label for="major2">Second Major: </label>
                    <select id="major2" class="form-control" name="Second Major" size={1}>
                        <option value="None">No Second Major</option>
                        <option value="IMGD-Art">IMGD-Art</option>
                        <option value="IMGD-Tech">IMGD-Tech</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Robotics Engineering">Robotics Engineering</option>
                        <option value="Aerospace Engineering">Aerospace Engineering</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Chemical Engineering">Chemical Engineering</option>
                        <option value="Biochemical Engineering">Biochemical Engineering</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="Physics">Physics</option>
                        <option value="Business">Business</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/>
                    <label for="minors">Your Minors: </label>
                    <select multiple="multiple" class="form-control" id="minors" name="Minors" size={5}>
                        <option value="None">No Minors</option>
                        <option value="IMGD">IMGD</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Robotics Engineering">Robotics Engineering</option>
                        <option value="Aerospace Engineering">Aerospace Engineering</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Chemical Engineering">Chemical Engineering</option>
                        <option value="Biochemical Engineering">Biochemical Engineering</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="Physics">Physics</option>
                        <option value="Business">Business</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/>
                    <label for="hobbies">Your Hobbies: </label>
                    <br/>
                    <select multiple="multiple" class="form-control" id="hobbies" name="Hobbies" size={7}>
                        <option value="None">None</option>
                        <optgroup label="Sports">
                            <option value="Football">Football</option>
                            <option value="Baseball">Baseball</option>
                            <option value="Soccer">Soccer</option>
                            <option value="Basketball">Basketball</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Running">Running</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Skiing">Skiing</option>
                            <option value="Swimming">Swimming</option>
                            
                        </optgroup>
                        <optgroup label="Arts">
                            <option value="Singing">Singing</option>
                            <option value="Writing">Writing</option>
                            <option value="Playing an Instrument">Playing an Instrument</option>
                            <option value="Photography">Photography</option>
                            <option value="Painting">Painting</option>
                            <option value="Drawing">Drawing</option>
                            <option value="3D Modelling">3D Modelling</option>
                            <option value="Game Development">Game Development</option>
                            <option value="Filming">Filming</option>
                            <option value="Video Editing">Video Editing</option>
                            <option value="Photoshop">Photshop</option>
                            <option value="Acting">Acting</option>
                        </optgroup>
                        <optgroup label="Entertainment">
                            <option value="Concerts">Concerts</option>
                            <option value="Video Games">Video Games</option>
                            <option value="Food">Food</option>
                            <option value="Driving">Driving</option>
                            <option value="Movies">Movies</option>
                            <option value="Memes">Memes</option>  
                        </optgroup>
                        <option value="Animals">Animals</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/>
                    <button id="insertBtn">Insert</button>
                    <button id="modBtn">Modify</button>
                    <button id="deleteBtn">Delete</button>
                </form>
            </div>
        );
    }
}

export default Form;