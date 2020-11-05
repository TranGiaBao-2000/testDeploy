import React, { Component } from "react";
import { getMovieListRequest } from "../../Redux/actions/movie.actions";
import { connect } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import MovieItem from "../../Component/MovieItem";
// import { makeStyles,useS } from "@material-ui/core";
class Home extends Component {
  renderMovieList = () => {
    const { movieList } = this.props;
    return movieList?.map((movie, index) => {
      return (
        <Grid item sm={3} key={index}>
          <MovieItem movie={movie} />
        </Grid>
      );
    });
  };
  render() {
    const { isLoading, movieList } = this.props;
    return (
      <div className="container text-center mt-5" style={{ fontSize: 50 }}>
        {isLoading ? (
          <CircularProgress size={100} color="secondary" />
        ) : (
          <Grid container>{this.renderMovieList()}</Grid>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getMovieListRequest());
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.common.isLoading,
    movieList: state.movie.movieList,
  };
};
export default connect(mapStateToProps)(Home);
