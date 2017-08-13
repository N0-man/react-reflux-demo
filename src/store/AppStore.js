import Reflux from 'reflux'
import Actions from '../actions/Actions'

class AppStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.state = {count1: 0, count2: 0};
        this.listenToMany(Actions);
        //this.listenables = Actions; // <- would work equally well
    }

    pageOneLoad()
    {
        var newCount = this.state.count1 + 1;
        this.setState({count1: newCount});
        console.log('Page 1 log')
        console.log(this.state)
    }

    pageTwoLoad()
    {
        var newCount = this.state.count2 + 1;
        this.setState({count2: newCount});
        console.log('Page 2 log')
        console.log(this.state)
    }

    reset()
    {
        this.setState({count1: 0});
        this.setState({count2: 0});
        console.log('Reset Log')
        console.log(this.state)
    }
}

export default AppStore;