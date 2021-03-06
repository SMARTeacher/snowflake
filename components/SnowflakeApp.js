// @flow

import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'
import { milestones, milestoneToPoints, getTracksForDomain, getTargetRolesForDomain, getCategoryColorScaleFromTracks, FULLSTACK_DOMAIN } from '../constants'
import type { DomainId, Milestone, MilestoneMap } from '../constants'
import React from 'react'
import DomainSelector from '../components/DomainSelector'
import RoleSelector, {EMPTY_VALUE as TARGET_ROLE_EMPTY_VALUE} from '../components/RoleSelector'

type SnowflakeAppState = {
  domain: DomainId,
  milestoneByTrack: MilestoneMap,
  name: String,
  title: String,
  focusedTrackId: String,
}

const hashToState = (hash: String, trackIds: Array<TrackId>): ?SnowflakeAppState => {
  if (!hash) return null
  const result = defaultState()
  const hashValues = hash.split('#')[1].split(',')
  if (!hashValues) return null
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]))
  })
  if (hashValues[16]) result.name = decodeURIComponent(hashValues[16])
  if (hashValues[17]) result.title = decodeURIComponent(hashValues[17])
  if (hashValues[18]) result.domain = decodeURIComponent(hashValues[18])
  if (hashValues[19]) result.targetRole = decodeURIComponent(hashValues[19])
  return result
}

const coerceMilestone = (value: number): Milestone => {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch(value) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    case 5: return 5
    default: return 0
  }
}

const emptyState = (): SnowflakeAppState => {
  return {
    domain: '',
    name: '',
    title: TARGET_ROLE_EMPTY_VALUE,
    targetRole: TARGET_ROLE_EMPTY_VALUE,
    milestoneByTrack: {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0
    },
    focusedTrackId: '1'
  }
}

const defaultState = (): SnowflakeAppState => {
  return {
    domain: FULLSTACK_DOMAIN,
    name: 'Cersei Lannister',
    title: 'Senior Full Stack Developer',
    targetRole: TARGET_ROLE_EMPTY_VALUE,
    milestoneByTrack: {
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 2,
      '5': 4,
      '6': 1,
      '7': 1,
      '8': 4,
      '9': 3,
      '10': 2,
      '11': 0,
      '12': 4,
      '13': 2,
      '14': 2,
      '15': 3,
      '16': 0
    },
    focusedTrackId: '1'
  }
}

const getIdForTrack = (track, tracks) => {
  return Object.keys(tracks).find(trackId => {
    return tracks[trackId] === track;
  });
}

const stateToHash = (state: SnowflakeAppState, trackIds: Array<TrackId>) => {
  if (!state || !state.milestoneByTrack) return null
  const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURIComponent(state.name), encodeURIComponent(state.title), encodeURIComponent(state.domain), encodeURIComponent(state.targetRole))
  return values.join(',') 
}

const getTargetMilestonesForTargetRole = (targetRoles, targetRoleName) => {
  if (targetRoleName === TARGET_ROLE_EMPTY_VALUE) {
    return null;
  }
  
  const targetRole = targetRoles.find(role => {
    return role.displayName === targetRoleName;
  });

  return targetRole.milestones;
}

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)
    this.state = emptyState()
  }

  componentDidUpdate() {
    const trackIds = Object.keys(getTracksForDomain(this.state.domain))
    const hash = stateToHash(this.state, trackIds)
    if (hash) window.location.replace(`#${hash}`)
  }

  componentDidMount() {
    const trackIds = Object.keys(getTracksForDomain(this.state.domain))
    const state = hashToState(window.location.hash, trackIds)
    if (state) {
      this.setState(state)
    } else {
      this.setState(defaultState())
    }
  }

  render() {
    const tracks = getTracksForDomain(this.state.domain);
    const allRoles = getTargetRolesForDomain(this.state.domain);
    const categoryColorScale = getCategoryColorScaleFromTracks(tracks);
    const targetMilestones = getTargetMilestonesForTargetRole(allRoles, this.state.targetRole);

    return (
      <main>
        <style jsx global>{`
          body {
            font-family: Helvetica;
          }
          main {
            width: 960px;
            margin: 0 auto;
          }
          .name-input {
            border: none;
            display: block;
            border-bottom: 2px solid #fff;
            font-size: 30px;
            line-height: 40px;
            font-weight: bold;
            width: 380px;
            margin-bottom: 10px;
          }
          .name-input:hover, .name-input:focus {
            border-bottom: 2px solid #ccc;
            outline: 0;
          }
          a {
            color: #888;
            text-decoration: none;
          }
        `}</style>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}>
            <form>
              <input
                  type="text"
                  className="name-input"
                  value={this.state.name}
                  onChange={e => this.setState({name: e.target.value})}
                  placeholder="Name"
                  />
              <DomainSelector
                  currentDomain={this.state.domain}
                  setDomainFn={(domain) => this.setDomain(domain)} />
              {allRoles &&
                <RoleSelector
                    label={'Current role'}
                    selectedRole={this.state.title}
                    allRoles={allRoles}
                    setRoleFn={(currentRole) => this.setCurrentRole(currentRole)} />
              }
              {allRoles &&
                <RoleSelector
                    label={'Target role'}
                    selectedRole={this.state.targetRole}
                    allRoles={allRoles}
                    setRoleFn={(targetRole) => this.setTargetRole(targetRole)} />
              }
            </form>
          </div>
          <div style={{flex: 0}}>
            <NightingaleChart
                milestoneByTrack={this.state.milestoneByTrack}
                focusedTrackId={this.state.focusedTrackId}
                handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)}
                tracks={tracks}
                categoryColorScale={categoryColorScale}
                targetMilestones={targetMilestones} />
          </div>
        </div>
        <TrackSelector
            milestoneByTrack={this.state.milestoneByTrack}
            focusedTrackId={this.state.focusedTrackId}
            setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)}
            tracks={tracks}
            categoryColorScale={categoryColorScale} />
        <KeyboardListener
            selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
            selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
            increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
            decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
        <Track
            currentMilestoneValue={this.state.milestoneByTrack[this.state.focusedTrackId]}
            track={tracks[this.state.focusedTrackId]}
            handleTrackMilestoneChangeFn={(trackId, milestone) => this.handleTrackMilestoneChange(trackId, milestone)}
            categoryColorScale={categoryColorScale} />
      </main>
    )
  }

  handleTrackMilestoneChange(track: Track, milestone: Milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    const trackId = getIdForTrack(track, getTracksForDomain(this.state.domain))
    milestoneByTrack[trackId] = milestone
    this.setState({ milestoneByTrack, focusedTrackId: trackId })
  }

  shiftFocusedTrack(delta: number) {
    const trackIds = Object.keys(getTracksForDomain(this.state.domain))
    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId(track: Track) {
    const focusedTrackId = getIdForTrack(track, getTracksForDomain(this.state.domain))
    this.setState({ focusedTrackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(getTracksForDomain(this.state.domain)[this.state.focusedTrackId], milestone)
  }

  setDomain(domain: string) {
    this.setState({
      domain,
      targetRole: TARGET_ROLE_EMPTY_VALUE,
      title: TARGET_ROLE_EMPTY_VALUE,
    })
  }

  setTargetRole(targetRole: string) {
    this.setState({ targetRole })
  }

  setCurrentRole(role: string) {
    this.setState({ title: role })
  }
}

export default SnowflakeApp
