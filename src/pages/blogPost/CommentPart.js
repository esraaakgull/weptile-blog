import { useContext } from 'react';
import React from 'react';

import Textarea from '../../components/Textarea';
import colors from '../../constants/colors';
import strings from '../../constants/strings';
import UserContext from '../../contexts/userContext';

const CommentPart = () => {
	const userContext = useContext(UserContext);
	const user = { userContext };

	return (
		<section className='mb-5'>
			<div className={`card ${colors.APP_BG}`}>
				{user && (
					<span className='text-danger ps-3 pt-2'>
						{strings.loginCheckErrorForComment}
					</span>
				)}
				<div className='card-body'>
					<div className='mb-4'>
						<Textarea
							id='BlogPostMessage'
							name='BlogPostMessage'
							rows='3'
							placeholder={strings.joinDiscussion}
							disabled={!user}
						/>
					</div>

					<div className='d-flex mb-4'>
						<div className='flex-shrink-0'>
							<img
								className='rounded-circle'
								src='https://dummyimage.com/50x50/ced4da/6c757d.jpg'
								alt='...'
							/>
						</div>
						<div className='ms-3'>
							<div className='fw-bold'>Commenter Name</div>
							If you're going to lead a space frontier, it has to be government; it'll
							never be private enterprise. Because the space frontier is dangerous,
							and it's expensive, and it has unquantified risks.
							<div className='d-flex mt-4'>
								<div className='flex-shrink-0'>
									<img
										className='rounded-circle'
										src='https://dummyimage.com/50x50/ced4da/6c757d.jpg'
										alt='...'
									/>
								</div>
								<div className='ms-3'>
									<div className='fw-bold'>Commenter Name</div>
									And under those conditions, you cannot establish a
									capital-market evaluation of that enterprise. You can't get
									investors.
								</div>
							</div>
							<div className='d-flex mt-4'>
								<div className='flex-shrink-0'>
									<img
										className='rounded-circle'
										src='https://dummyimage.com/50x50/ced4da/6c757d.jpg'
										alt='...'
									/>
								</div>
								<div className='ms-3'>
									<div className='fw-bold'>Commenter Name</div>
									When you put money directly to a problem, it makes a good
									headline.
								</div>
							</div>
						</div>
					</div>

					<div className='d-flex'>
						<div className='flex-shrink-0'>
							<img
								className='rounded-circle'
								src='https://dummyimage.com/50x50/ced4da/6c757d.jpg'
								alt='...'
							/>
						</div>
						<div className='ms-3'>
							<div className='fw-bold'>Commenter Name</div>
							When I look at the universe and all the ways the universe wants to kill
							us, I find it hard to reconcile that with statements of beneficence.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default CommentPart;
