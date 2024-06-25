import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const GenderCheckBox = ({ selectedGender, onGenderChange }) => {
  const { t, } = useTranslation();
  
  return (
    <>
      <span className="text-slate-600 my-2 mb-1">{t('gender-label')}* </span>
      <div className='flex justify-between w-1/2'>
        <div className='form-control'>
          <label className='label cursor-pointer ps-0'>
            <span className="me-2">{t('male-label')}</span>
            <input
              type='radio'
              name='radio-10'
              className='radio checked:bg-blue-400'
              checked={selectedGender === 'male'}
              onChange={() => onGenderChange('male')}
            />
          </label>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer ps-0'>
            <span className="me-2">{t('female-label')}</span>
            <input
              type='radio'
              name='radio-10'
              className='radio checked:bg-pink-400'
              checked={selectedGender === 'female'}
              onChange={() => onGenderChange('female')}
            />
          </label>
        </div>
      </div>
    </>
  );
};

GenderCheckBox.propTypes = {
    selectedGender: PropTypes.string.isRequired,
    onGenderChange: PropTypes.func.isRequired,
}

export default GenderCheckBox;