/**
 * @file larkplayer custom style
 * @author yuhui06
 * @date 2018/5/4
 */

import {Component, Plugin, util} from 'larkplayer';
import document from 'global/document';

import ClassNameManager from './class-name-manager';
import ControlsProxy from './controls-proxy';
import ControlBar from './container/control-bar';
import ProgressBarSimple from './container/progress-bar-simple';
import ControlBarPc from './container/control-bar-pc';
import Loading from './component/loading';
import PlayButton from './component/play-button';
import Complete from './component/complete';
import LoadingPc from './component/loading-pc';
import NotSupport from './component/not-support';
import Error from './component/error';
import ErrorPc from './component/error-pc';

const isMobile = util.featureDetector.touch;

Plugin.register(ClassNameManager, {name: 'classNameManager'});
Plugin.register(ControlsProxy, {name: 'controlsProxy'});

if (isMobile) {
    Component.register(ControlBar, {name: 'controlBar'});
    Component.register(Loading, {name: 'loading'});
    Component.register(PlayButton, {name: 'playButton'});
    Component.register(ProgressBarSimple, {name: 'progressBarSimple'});
    Component.register(Error, {name: Error});
} else {
    Component.register(Complete, {name: 'complete'});
    Component.register(ControlBarPc, {name: 'controlBarPc'});
    Component.register(LoadingPc, {name: 'loadingPc'});
    Component.register(ErrorPc, {name: ErrorPc});
}

Component.register(NotSupport, {name: 'notSupport'});
