import React from 'react';

import StatusNav from '../../components/status-nav-component/status-nav.component';
import TypeNav from '../../components/type-nav-component/type-nav.component';
import Header from '../../components/header-component/header.component';
import Card from '../../components/card-component/card.component';
import Pagination from '../../components/pagination-component/pagination.component';

import apolloFetch from '../../apollo/client';

class SchedulePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'All',
            status: 'upcoming',
            scheduleData: [],
            page: 0,
            error: null,
            isNextPageAvailable: true
        }
    }

    componentDidMount() {
        this.fetchSchedule();
    }

    setStateValue = (key, value) => {
        this.setState({ [key]: value }, () => {
            this.fetchSchedule();
        });
    }

    handleNextPageClick = () => {
        this.setStateValue('page', (this.state.page + 1));
    }

    handlePreviousPageClick = () => {
        const { page } = this.state;
        if (page > 0)
            this.setStateValue('page', (page - 1));
    }

    fetchSchedule = () => {
        const { type, status, page } = this.state;
        apolloFetch({
            query: `query getMatchSchedule($type: String!, $status: String!, $page: Int!){ 
                schedule(type: $type, status: $status, page: $page) 
                    { matchID seriesName }
                }`,
            variables: {
                type,
                status,
                page
            }
        }).then(resp => {
            console.log('data fetched is ', resp);
            if (resp.data) {
                this.setState({ scheduleData: resp.data.schedule });
                if (resp.data.schedule.length < 10)
                    this.setState({ isNextPageAvailable: false });
                else
                    this.setState({ isNextPageAvailable: true });
            }
            else if (resp.errors) {
                throw new Error(resp.errors)
            }
        }).catch((error) => {
            this.setState({ error: error });
        })

    }

    render() {
        const { status, type, scheduleData, page, error } = this.state;
        return (
            <div>
                <Header>
                    <StatusNav currentStatus={status} setValue={this.setStateValue} />
                    <div className='mt4'>
                    </div>
                    <TypeNav currentType={type} setValue={this.setStateValue} />
                </Header>
                {scheduleData && scheduleData.length ?
                    scheduleData.map((match) => {
                        return <Card status={status} type={type} seriesName={match.seriesName} />
                    }) :
                    error ?
                        <Card errorCard={true} message={'Error in Fetching Data'} />
                        :
                        <Card emptyList={true} message={'No Data Found'} />
                }
                <Pagination
                    showNextPageButton={this.state.isNextPageAvailable}
                    showPreviousPageButton={(page > 0)}
                    onClickPrevious={this.handlePreviousPageClick}
                    onClickNext={this.handleNextPageClick} />
            </div>

        );
    }
}

export default SchedulePage;