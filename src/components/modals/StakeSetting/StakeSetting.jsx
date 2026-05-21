import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useEditButtonValuesMutation } from "../../../redux/features/events/events";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const StakeSetting = ({ setShowStakeSettings }) => {
  const ref = useRef(null);
  const handleClose = () => {
    setShowStakeSettings(false);
  };

  useCloseModalClickOutside(ref, () => setShowStakeSettings(false));

  const [editButtonValue] = useEditButtonValuesMutation();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });

  const buttonGameValues = watch("buttonGameValues");

  const onSubmit = async () => {
    const payload = {
      game: buttonGameValues?.map((btn) => ({
        label: parseFloat(btn?.label),
        value: parseFloat(btn?.value),
      })),
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = buttonGameValues;
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
      handleClose();
    }
  };
  return (
    <div
      id="__BVID__17016___BV_modal_outer_"
      style={{ position: "absolute", zIndex: 1040 }}
    >
      <div
        id="__BVID__17016"
        role="dialog"
        aria-labelledby="__BVID__17016___BV_modal_title_"
        aria-describedby="__BVID__17016___BV_modal_body_"
        className="modal fade show"
        aria-modal="true"
        style={{ display: "block", paddingRight: "15px" }}
      >
        <div className="modal-dialog modal-md">
          <span tabIndex={0} />
          <div
            id="__BVID__17016___BV_modal_content_"
            tabIndex={-1}
            className="modal-content"
            ref={ref}
          >
            <header
              id="__BVID__17016___BV_modal_header_"
              className="modal-header"
            >
              <h5 id="__BVID__17016___BV_modal_title_" className="modal-title">
                Set Button Value
              </h5>
              <button
                onClick={handleClose}
                type="button"
                aria-label="Close"
                className="close"
              >
                ×
              </button>
            </header>
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="__BVID__17016___BV_modal_body_"
              className="modal-body"
            >
              <div className>
                <div className="tab-content">
                  <div id="game-btn" className="bet-table tab-pane active">
                    <div className="table-responsive">
                      <table className="table button-value">
                        <thead>
                          <tr>
                            <th>Price Label</th> <th>Price Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {stakes?.map((stake, i) => {
                            return (
                              <tr key={i}>
                                <td>
                                  <input
                                    {...register(`buttonGameValues.${i}.label`)}
                                    defaultValue={stake?.label}
                                    type="text"
                                    className="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    {...register(`buttonGameValues.${i}.value`)}
                                    defaultValue={stake?.value}
                                    type="number"
                                    className="form-control"
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="text-right">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <span tabIndex={0} />
        </div>
      </div>
      <div id="__BVID__17016___BV_modal_backdrop_" className="modal-backdrop" />
    </div>
  );
};

export default StakeSetting;
