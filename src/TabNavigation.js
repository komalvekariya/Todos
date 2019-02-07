    import React, { Component } from 'react';
    import all from './screens/all'
    import active from './screens/active'
    import completed from './screens/completed'

    import { createAppContainer,createBottomTabNavigator} from 'react-navigation'

    //import ShowData from './containers/VisibleTodos'
    const TabNavigator = createBottomTabNavigator({   
        all:{screen:all},
        active: { screen: active },
        completed:{screen:completed}
    },      
        {
            initialRouteName: 'all',
        });


        const AppContainer = createAppContainer(TabNavigator);

    export default AppContainer