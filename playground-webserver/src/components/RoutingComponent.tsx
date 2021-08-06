import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import DevelopmentEnvironment from '../pages/DevelopmentEnvironment'
import ModifyingDom from '../pages/ModifyingDOM'
import AlgorithmCompile from '../pages/AlgorithmCompile'

export default function RoutingComponent() {
    return (
        <Switch>
            <Route path="/algorithmCompileExample">
                <AlgorithmCompile />
            </Route>
            <Route path="/developmentEnvironmentExample">
                <DevelopmentEnvironment />
            </Route>
            <Route path="/modifyingDOMExample">
                <ModifyingDom />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch>
    )
}