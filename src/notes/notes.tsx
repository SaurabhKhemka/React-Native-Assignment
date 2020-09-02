import React, {useState} from 'react';
import {Text, TextInput, View, KeyboardAvoidingView} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

function NotesComponent() {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [selectedStatus, setselectedStatus] = useState('');
  const [noteListArray, setNoteListArray] = useState([]);

  const addNote = () => {
    if (title && status) {
      noteListArray.unshift({
        title: title,
        status: status,
        priority:
          status.toLowerCase() === 'active'
            ? 0
            : status.toLowerCase() === 'completed'
            ? 1
            : 2,
      });
      noteListArray.sort(function (a, b) {
        return a.priority - b.priority;
      });
      setNoteListArray(noteListArray);
      setTitle('');
      setStatus('');
      setselectedStatus('');
    }
  };

  return (
    <SafeAreaProvider>
      <View>
        <KeyboardAvoidingView enabled>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            scrollEnabled
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <View style={styles.view}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Note Title"
                  value={title}
                  onChangeText={(e) => setTitle(e)}
                />

                <TextInput
                  style={styles.textInput}
                  placeholder="Note Status"
                  value={status}
                  onChangeText={(e) => setStatus(e)}
                />

                <Button
                  style={styles.btn}
                  labelStyle={styles.btnText}
                  onPress={addNote}
                  mode="contained"
                  color="rgb(169,60,50)">
                  ADD NOTE
                </Button>
              </View>

              <View style={styles.tabContainer}>
                <Button
                  style={[
                    styles.tab,
                    selectedStatus === ''
                      ? {
                          backgroundColor: '#fff',
                          borderTopColor: '#1ba94c',
                          borderTopWidth: 2,
                        }
                      : null,
                  ]}
                  onPress={() => setselectedStatus('')}
                  color="#000">
                  All
                </Button>
                <Button
                  style={[
                    styles.tab,
                    selectedStatus === 'active'
                      ? {
                          backgroundColor: '#fff',
                          borderTopColor: '#1ba94c',
                          borderTopWidth: 2,
                        }
                      : null,
                  ]}
                  onPress={() => setselectedStatus('active')}
                  color="#000">
                  Active
                </Button>
                <Button
                  style={[
                    styles.tab,
                    selectedStatus === 'completed'
                      ? {
                          backgroundColor: '#fff',
                          borderTopColor: '#1ba94c',
                          borderTopWidth: 2,
                        }
                      : null,
                  ]}
                  onPress={() => setselectedStatus('completed')}
                  color="#000">
                  Completed
                </Button>
              </View>

              <View style={{flex: 1}}>
                <View style={styles.headerView}>
                  <Text style={[styles.data, {color: '#738f93'}]}>Title</Text>
                  <Text style={[styles.data, {color: '#738f93'}]}>Status</Text>
                </View>

                {noteListArray.length > 0 &&
                  noteListArray.map((note, index) =>
                    selectedStatus ? (
                      note.status === selectedStatus && (
                        <View key={index} style={styles.headerView}>
                          <Text style={styles.data}>{note.title}</Text>
                          <Text style={styles.data}>{note.status}</Text>
                        </View>
                      )
                    ) : (
                      <View key={index} style={styles.headerView}>
                        <Text style={styles.data}>{note.title}</Text>
                        <Text style={styles.data}>{note.status}</Text>
                      </View>
                    ),
                  )}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaProvider>
  );
}

export default NotesComponent;
