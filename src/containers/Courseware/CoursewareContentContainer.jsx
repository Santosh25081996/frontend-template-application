import { connect } from 'react-redux';

import CoursewareContent from '../../components/Courseware/CoursewareContent';
import { fetchSectionBlocks } from '../../data/actions';

const mapStateToProps = state => ({
  blocks: state.sectionBlocks.blocks,
});

const mapDispatchToProps = dispatch => ({
  getSectionBlocks: () => dispatch(fetchSectionBlocks()),
});

const CoursewareContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursewareContent);

export default CoursewareContentContainer;
