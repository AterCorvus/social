import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    actEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactEditMode = () => {
        this.setState( {
            editMode: false
        });
    }

    render() {
        return <>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.actEditMode }>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={ this.deactEditMode } value={this.props.status}/>
                </div>
            }
        </>
    }
}

export default ProfileStatus;