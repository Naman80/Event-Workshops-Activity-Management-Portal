import { useStepperContext } from "../../contexts/StepperContext";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers"
import { Grid } from "@material-ui/core"; "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns";

export default function Date() {
    const { userData, setUserData } = useStepperContext();

    const [selectedDate, setSelectedDate] = useState();

    const handleChange = (date) => {
        setUserData({ ...userData, "date": date });
        setSelectedDate(date);
    };

    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-2xl font-bold uppercase leading-8 text-gray-500">
                    Select a date for the event
                </div>
                <Container maxWidth="xs">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yy"
                                margin="normal"
                                id="date-picker"
                                label="Date-Picker"
                                value={selectedDate}
                                onChange={handleChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date'
                                }}
                                disablePast
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </Container>
            </div>
        </div>
    );
}